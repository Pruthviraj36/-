import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET() {
  await requireRole(["admin"]);
  const list = await prisma.projectType.findMany({ orderBy: { ProjectTypeName: "asc" } });
  return Response.json(list);
}

export async function POST(req: NextRequest) {
  await requireRole(["admin"]);
  const b = await req.json();
  const { ProjectTypeName, Description } = b;
  if (!ProjectTypeName) return Response.json({ error: "ProjectTypeName required" }, { status: 400 });
  const created = await prisma.projectType.create({
    data: { ProjectTypeName, Description: Description || null },
  });
  return Response.json(created);
}
