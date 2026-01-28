import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const r = await prisma.projectType.findUnique({ where: { ProjectTypeID: id } });
  if (!r) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(r);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const b = await req.json();
  const { ProjectTypeName, Description } = b;
  const updated = await prisma.projectType.update({
    where: { ProjectTypeID: id },
    data: { ...(ProjectTypeName != null && { ProjectTypeName }), ...(Description != null && { Description }) },
  });
  return Response.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin"]);
  const id = Number((await params).id);
  if (Number.isNaN(id)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  await prisma.projectType.delete({ where: { ProjectTypeID: id } });
  return Response.json({ ok: true });
}
