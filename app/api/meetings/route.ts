import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, requireRole } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  const session = await requireAuth();
  const role = (session.user as { role?: string }).role;
  const uid = (session.user as { uid?: string }).uid;
  const groupId = req.nextUrl.searchParams.get("groupId");
  console.log(`[API/Meetings] GET called by ${role} (${uid})`);

  const include = {
    projectGroup: { select: { ProjectGroupID: true, ProjectGroupName: true, ProjectTitle: true } },
    guide: { select: { StaffName: true } },
    attendances: { include: { student: { select: { StudentName: true, StudentID: true } } } },
  };

  if (role === "student") {
    const myGroups = await prisma.projectGroupMember.findMany({
      where: { StudentID: Number(uid) },
      select: { ProjectGroupID: true },
    });
    const gids = myGroups.map((g) => g.ProjectGroupID);
    const list = await prisma.projectMeeting.findMany({
      where: { ProjectGroupID: { in: gids } },
      include,
      orderBy: { MeetingDateTime: "desc" },
    });
    return Response.json(list);
  }

  const where = groupId ? { ProjectGroupID: Number(groupId) } : {};
  const list = await prisma.projectMeeting.findMany({
    where: Object.keys(where).length ? where : undefined,
    include,
    orderBy: { MeetingDateTime: "desc" },
  });
  return Response.json(list);
}

export async function POST(req: NextRequest) {
  await requireRole(["admin", "faculty"]);
  const b = await req.json();
  const { ProjectGroupID, GuideStaffID, MeetingDateTime, MeetingPurpose, MeetingLocation, MeetingNotes, MeetingStatus } = b;
  if (!ProjectGroupID || !GuideStaffID || !MeetingDateTime) return Response.json({ error: "ProjectGroupID, GuideStaffID, MeetingDateTime required" }, { status: 400 });
  const created = await prisma.projectMeeting.create({
    data: {
      ProjectGroupID,
      GuideStaffID,
      MeetingDateTime: new Date(MeetingDateTime),
      MeetingPurpose: MeetingPurpose || null,
      MeetingLocation: MeetingLocation || null,
      MeetingNotes: MeetingNotes || null,
      MeetingStatus: MeetingStatus || "Scheduled",
    },
    include: { projectGroup: { select: { ProjectGroupName: true } }, guide: { select: { StaffName: true } } },
  });
  return Response.json(created);
}
