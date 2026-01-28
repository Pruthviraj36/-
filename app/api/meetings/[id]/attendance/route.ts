import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const meetingId = Number((await params).id);
  if (Number.isNaN(meetingId)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const b = await req.json();
  const { StudentID, IsPresent, AttendanceRemarks } = b;
  if (!StudentID) return Response.json({ error: "StudentID required" }, { status: 400 });
  const created = await prisma.projectMeetingAttendance.upsert({
    where: { ProjectMeetingID_StudentID: { ProjectMeetingID: meetingId, StudentID } },
    create: { ProjectMeetingID: meetingId, StudentID, IsPresent: !!IsPresent, AttendanceRemarks: AttendanceRemarks || null },
    update: { IsPresent: !!IsPresent, AttendanceRemarks: AttendanceRemarks || null },
  });
  return Response.json(created);
}
