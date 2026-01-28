import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardView } from "./DashboardView";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string })?.role ?? "student";
  const uid = (session?.user as { uid?: string })?.uid;

  let cards: { label: string; value: string | number; accent?: "primary" | "success" | "danger" }[] = [];

  if (role === "admin") {
    const [totalProjects, pending, staffCount, meetingsToday] = await Promise.all([
      prisma.projectGroup.count(),
      prisma.projectGroup.count({ where: { Status: "Pending" } }),
      prisma.staff.count(),
      prisma.projectMeeting.count({
        where: {
          MeetingDateTime: { gte: new Date(new Date().setHours(0, 0, 0, 0)), lt: new Date(new Date().setHours(23, 59, 59, 999)) },
          MeetingStatus: "Scheduled",
        },
      }),
    ]);
    cards = [
      { label: "Total projects", value: totalProjects, accent: "primary" },
      { label: "Pending approvals", value: pending, accent: "danger" },
      { label: "Staff", value: staffCount },
      { label: "Meetings today", value: meetingsToday, accent: "success" },
    ];
  } else if (role === "faculty") {
    const staffId = Number(uid);
    const [assigned, meetingsToday, pending] = await Promise.all([
      prisma.projectGroup.count({ where: { GuideStaffID: staffId } }),
      prisma.projectMeeting.count({
        where: {
          GuideStaffID: staffId,
          MeetingDateTime: { gte: new Date(new Date().setHours(0, 0, 0, 0)), lt: new Date(new Date().setHours(23, 59, 59, 999)) },
          MeetingStatus: "Scheduled",
        },
      }),
      prisma.projectGroup.count({ where: { GuideStaffID: staffId, Status: "Pending" } }),
    ]);
    cards = [
      { label: "Assigned projects", value: assigned, accent: "primary" },
      { label: "Meetings today", value: meetingsToday, accent: "success" },
      { label: "Pending reviews", value: pending, accent: "danger" },
    ];
  } else {
    const studentId = Number(uid);
    const member = await prisma.projectGroupMember.findFirst({
      where: { StudentID: studentId },
      include: { projectGroup: { include: { guide: { select: { StaffName: true } } } } },
    });
    const meetingsCount = member
      ? await prisma.projectMeeting.count({
          where: { ProjectGroupID: member.ProjectGroupID, MeetingStatus: "Scheduled", MeetingDateTime: { gte: new Date() } },
        })
      : 0;
    cards = [
      { label: "My group", value: member?.projectGroup.ProjectGroupName ?? "—" },
      { label: "Upcoming meetings", value: meetingsCount, accent: "success" },
      { label: "Project status", value: member?.projectGroup.Status ?? "—" },
    ];
  }

  return (
    <>
      <h1 className="h2" style={{ marginBottom: "var(--space-lg)" }}>
        Dashboard
      </h1>
      <DashboardView cards={cards} role={role} />
    </>
  );
}
