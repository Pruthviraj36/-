import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  await requireRole(["admin", "faculty"]);
  const academicYearId = req.nextUrl.searchParams.get("academicYearId");
  const where = academicYearId ? { AcademicYearID: Number(academicYearId) } : {};
  const list = await prisma.department.findMany({
    where: Object.keys(where).length ? where : undefined,
    orderBy: { DepartmentName: "asc" },
    include: { academicYear: { select: { YearName: true } } },
  });
  return Response.json(list);
}

export async function POST(req: NextRequest) {
  await requireRole(["admin"]);
  const b = await req.json();
  const { DepartmentName, AcademicYearID, Description } = b;
  if (!DepartmentName || !AcademicYearID) return Response.json({ error: "DepartmentName, AcademicYearID required" }, { status: 400 });
  const created = await prisma.department.create({
    data: { DepartmentName, AcademicYearID, Description: Description || null },
  });
  return Response.json(created);
}
