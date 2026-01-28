import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, requireRole } from "@/lib/api-auth";

const include = {
  projectType: { select: { ProjectTypeName: true } },
  guide: { select: { StaffName: true, StaffID: true, Email: true } },
  convener: { select: { StaffName: true, StaffID: true } },
  expert: { select: { StaffName: true, StaffID: true } },
  academicYear: { select: { YearName: true, AcademicYearID: true } },
  members: { include: { student: { select: { StudentID: true, StudentName: true, Email: true } } } },
  documents: true,
};

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireAuth();
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const r = await prisma.projectGroup.findUnique({ where: { ProjectGroupID: id }, include });
  if (!r) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(r);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const b = await req.json();
  const data: Record<string, unknown> = {};
  const fields = ["ProjectGroupName", "ProjectTypeID", "GuideStaffID", "ProjectTitle", "ProjectArea", "ProjectDescription", "AverageCPI", "ConvenerStaffID", "ExpertStaffID", "AcademicYearID", "Status", "Description"];
  for (const f of fields) {
    if (b[f] !== undefined) data[f] = f === "AverageCPI" && b[f] != null ? Number(b[f]) : b[f];
  }
  const updated = await prisma.projectGroup.update({ where: { ProjectGroupID: id }, data, include });
  return Response.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  await prisma.projectGroup.delete({ where: { ProjectGroupID: id } });
  return Response.json({ ok: true });
}
