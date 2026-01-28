import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";
import bcrypt from "bcrypt";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const id = Number((await params).id);
  const b = await req.json();

  const data: Record<string, any> = {};
  if (b.StudentName != null) data.StudentName = b.StudentName;
  if (b.Phone != null) data.Phone = b.Phone;
  if (b.Email != null) data.Email = b.Email;
  if (b.DepartmentID != null) data.DepartmentID = Number(b.DepartmentID);
  if (b.AcademicYearID != null) data.AcademicYearID = Number(b.AcademicYearID);
  if (b.Description != null) data.Description = b.Description;

  if (b.Password) {
    data.Password = await bcrypt.hash(b.Password, 10);
  }

  const updated = await prisma.student.update({
    where: { StudentID: id },
    data
  });
  const { Password: _p, ...out } = updated;
  return Response.json(out);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const id = Number((await params).id);
  await prisma.student.delete({ where: { StudentID: id } });
  return Response.json({ ok: true });
}
