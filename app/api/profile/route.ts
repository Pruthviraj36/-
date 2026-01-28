import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function GET() {
  const s = await getServerSession(authOptions);
  if (!s?.user) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const role = (s.user as { role?: string }).role;
  const uid = (s.user as { uid?: string }).uid;
  if (!uid) return Response.json({ error: "Bad session" }, { status: 400 });
  if (role === "student") {
    const u = await prisma.student.findUnique({ where: { StudentID: Number(uid) } });
    if (!u) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ name: u.StudentName, email: u.Email, phone: u.Phone });
  }
  const u = await prisma.staff.findUnique({ where: { StaffID: Number(uid) } });
  if (!u) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json({ name: u.StaffName, email: u.Email, phone: u.Phone });
}

export async function PUT(req: NextRequest) {
  const s = await getServerSession(authOptions);
  if (!s?.user) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const role = (s.user as { role?: string }).role;
  const uid = (s.user as { uid?: string }).uid;
  if (!uid) return Response.json({ error: "Bad session" }, { status: 400 });
  const b = await req.json();
  const id = Number(uid);
  if (role === "student") {
    const data: Record<string, unknown> = {};
    if (b.name != null) data.StudentName = b.name;
    if (b.phone != null) data.Phone = b.phone;
    if (b.email != null) data.Email = b.email;
    if (b.password != null) data.Password = await bcrypt.hash(b.password, 10);
    await prisma.student.update({ where: { StudentID: id }, data });
  } else {
    const data: Record<string, unknown> = {};
    if (b.name != null) data.StaffName = b.name;
    if (b.phone != null) data.Phone = b.phone;
    if (b.email != null) data.Email = b.email;
    if (b.password != null) data.Password = await bcrypt.hash(b.password, 10);
    await prisma.staff.update({ where: { StaffID: id }, data });
  }
  return Response.json({ ok: true });
}
