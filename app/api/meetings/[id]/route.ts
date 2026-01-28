import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, requireRole } from "@/lib/api-auth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const include = {
  projectGroup: { select: { ProjectGroupID: true, ProjectGroupName: true, ProjectTitle: true } },
  guide: { select: { StaffName: true, StaffID: true } },
  attendances: { include: { student: { select: { StudentName: true, StudentID: true } } } },
};

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireAuth();
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const r = await prisma.projectMeeting.findUnique({ where: { ProjectMeetingID: id }, include });
  if (!r) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(r);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const b = await req.json();
  const data: Record<string, unknown> = {};
  if (b.ProjectGroupID != null) data.ProjectGroupID = b.ProjectGroupID;
  if (b.GuideStaffID != null) data.GuideStaffID = b.GuideStaffID;
  if (b.MeetingDateTime != null) data.MeetingDateTime = new Date(b.MeetingDateTime);
  if (b.MeetingPurpose != null) data.MeetingPurpose = b.MeetingPurpose;
  if (b.MeetingLocation != null) data.MeetingLocation = b.MeetingLocation;
  if (b.MeetingNotes != null) data.MeetingNotes = b.MeetingNotes;
  if (b.MeetingStatus != null) {
    data.MeetingStatus = b.MeetingStatus;
    data.MeetingStatusDatetime = new Date();
    const session = await getServerSession(authOptions);
    if ((session?.user as any).role !== "student") {
      data.StatusUpdatedByStaffID = Number((session?.user as any).uid);
    }
  }
  if (b.MeetingStatusDescription != null) data.MeetingStatusDescription = b.MeetingStatusDescription;
  const updated = await prisma.projectMeeting.update({ where: { ProjectMeetingID: id }, data, include });
  return Response.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  await prisma.projectMeeting.delete({ where: { ProjectMeetingID: id } });
  return Response.json({ ok: true });
}
