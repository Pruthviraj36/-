import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const r = await prisma.staff.findUnique({ where: { StaffID: id } });
  if (!r) return Response.json({ error: "Not found" }, { status: 404 });
  const { Password: _p, ...out } = r;
  return Response.json(out);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const b = await req.json();
  const { StaffName, Phone, Email, Password, Role, Description } = b;
  const data: Record<string, unknown> = {};
  if (StaffName != null) data.StaffName = StaffName;
  if (Phone != null) data.Phone = Phone;
  if (Email != null) data.Email = Email;
  if (Password != null) data.Password = await bcrypt.hash(Password, 10);
  if (Role != null) data.Role = Role === "Admin" ? "Admin" : "Faculty";
  if (Description != null) data.Description = Description;
  const updated = await prisma.staff.update({ where: { StaffID: id }, data });
  const { Password: _p, ...out } = updated;
  return Response.json(out);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  await prisma.staff.delete({ where: { StaffID: id } });
  return Response.json({ ok: true });
}
