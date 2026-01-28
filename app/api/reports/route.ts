import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  await requireRole(["admin", "faculty"]);
  const type = req.nextUrl.searchParams.get("type");

  if (type === "projects-by-type") {
    const rows = await prisma.projectGroup.groupBy({
      by: ["ProjectTypeID"],
      _count: { ProjectGroupID: true },
    });
    const types = await prisma.projectType.findMany();
    const map = Object.fromEntries(types.map((t) => [t.ProjectTypeID, t.ProjectTypeName]));
    const data = rows.map((r) => ({ type: map[r.ProjectTypeID] || "Unknown", count: r._count.ProjectGroupID }));
    return Response.json(data);
  }

  if (type === "projects-by-guide") {
    const rows = await prisma.projectGroup.groupBy({
      by: ["GuideStaffID"],
      _count: { ProjectGroupID: true },
    });
    const staff = await prisma.staff.findMany();
    const map = Object.fromEntries(staff.map((s) => [s.StaffID, s.StaffName]));
    const data = rows.map((r) => ({ guide: map[r.GuideStaffID] || "Unknown", count: r._count.ProjectGroupID }));
    return Response.json(data);
  }

  if (type === "group-members") {
    const list = await prisma.projectGroupMember.findMany({
      include: {
        projectGroup: { select: { ProjectGroupName: true, ProjectTitle: true } },
        student: { select: { StudentName: true, Email: true } },
      },
    });
    return Response.json(list);
  }

  if (type === "attendance-summary") {
    const list = await prisma.projectMeetingAttendance.groupBy({
      by: ["ProjectMeetingID"],
      _count: { ProjectMeetingAttendanceID: true },
    });
    const meetings = await prisma.projectMeeting.findMany({
      where: { ProjectMeetingID: { in: list.map((l) => l.ProjectMeetingID) } },
      include: { projectGroup: { select: { ProjectGroupName: true } } },
    });
    const att = await prisma.projectMeetingAttendance.findMany({
      where: { ProjectMeetingID: { in: list.map((l) => l.ProjectMeetingID) } },
    });
    const byMeeting: Record<number, { total: number; present: number }> = {};
    for (const a of att) {
      if (!byMeeting[a.ProjectMeetingID]) byMeeting[a.ProjectMeetingID] = { total: 0, present: 0 };
      byMeeting[a.ProjectMeetingID].total++;
      if (a.IsPresent) byMeeting[a.ProjectMeetingID].present++;
    }
    const data = meetings.map((m) => ({
      meetingId: m.ProjectMeetingID,
      groupName: m.projectGroup.ProjectGroupName,
      date: m.MeetingDateTime,
      ...byMeeting[m.ProjectMeetingID],
    }));
    return Response.json(data);
  }

  if (type === "progress-report") {
    const groups = await prisma.projectGroup.findMany({
      include: {
        projectType: { select: { ProjectTypeName: true } },
        guide: { select: { StaffName: true } },
        _count: { select: { meetings: true, documents: true } },
      },
    });
    const data = groups.map((g) => ({
      ProjectGroupID: g.ProjectGroupID,
      ProjectGroupName: g.ProjectGroupName,
      ProjectTitle: g.ProjectTitle,
      ProjectType: g.projectType.ProjectTypeName,
      Guide: g.guide.StaffName,
      Status: g.Status,
      MeetingsCount: g._count.meetings,
      DocumentsCount: g._count.documents,
      Created: g.Created,
    }));
    return Response.json(data);
  }

  return Response.json({ error: "Unknown report type" }, { status: 400 });
}
