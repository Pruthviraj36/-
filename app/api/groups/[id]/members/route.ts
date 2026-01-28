import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const groupId = Number((await params).id);
  if (Number.isNaN(groupId)) return Response.json({ error: "Invalid ID" }, { status: 400 });
  const b = await req.json();
  const { StudentID, IsGroupLeader, StudentCGPA } = b;
  if (!StudentID) return Response.json({ error: "StudentID required" }, { status: 400 });
  if (IsGroupLeader) await prisma.projectGroupMember.updateMany({ where: { ProjectGroupID: groupId }, data: { IsGroupLeader: false } });
  const created = await prisma.projectGroupMember.upsert({
    where: { ProjectGroupID_StudentID: { ProjectGroupID: groupId, StudentID } },
    create: { ProjectGroupID: groupId, StudentID, IsGroupLeader: !!IsGroupLeader, StudentCGPA: StudentCGPA != null ? Number(StudentCGPA) : null },
    update: { IsGroupLeader: !!IsGroupLeader, StudentCGPA: StudentCGPA != null ? Number(StudentCGPA) : null },
  });
  return Response.json(created);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(["admin", "faculty"]);
  const groupId = Number((await params).id);
  const studentId = req.nextUrl.searchParams.get("studentId");
  if (Number.isNaN(groupId) || !studentId) return Response.json({ error: "Invalid ID or studentId" }, { status: 400 });
  await prisma.projectGroupMember.delete({ where: { ProjectGroupID_StudentID: { ProjectGroupID: groupId, StudentID: Number(studentId) } } });
  return Response.json({ ok: true });
}
