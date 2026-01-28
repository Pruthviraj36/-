import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const r = await prisma.student.findUnique({ where: { StudentID: id } });
  if (!r) return Response.json({ error: "Not found" }, { status: 404 });
  const { Password: _p, ...out } = r;
  return Response.json(out);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const b = await req.json();
  const data: Record<string, unknown> = {};
  if (b.StudentName != null) data.StudentName = b.StudentName;
  if (b.Phone != null) data.Phone = b.Phone;
  if (b.Email != null) data.Email = b.Email;
  if (b.Password != null) data.Password = await bcrypt.hash(b.Password, 10);
  if (b.DepartmentID != null) data.DepartmentID = b.DepartmentID;
  if (b.AcademicYearID != null) data.AcademicYearID = b.AcademicYearID;
  if (b.Description != null) data.Description = b.Description;
  const updated = await prisma.student.update({ where: { StudentID: id }, data });
  const { Password: _p, ...out } = updated;
  return Response.json(out);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  await prisma.student.delete({ where: { StudentID: id } });
  return Response.json({ ok: true });
}
