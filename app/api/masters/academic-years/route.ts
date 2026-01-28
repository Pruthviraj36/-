import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET() {
  await requireRole(["admin", "faculty"]);
  const list = await prisma.academicYear.findMany({ orderBy: { StartDate: "desc" } });
  return Response.json(list);
}

export async function POST(req: NextRequest) {
  await requireRole(["admin"]);
  const b = await req.json();
  const { YearName, StartDate, EndDate, IsActive, Description } = b;
  if (!YearName || !StartDate || !EndDate) return Response.json({ error: "YearName, StartDate, EndDate required" }, { status: 400 });
  if (IsActive) await prisma.academicYear.updateMany({ data: { IsActive: false } });
  const created = await prisma.academicYear.create({
    data: { YearName, StartDate: new Date(StartDate), EndDate: new Date(EndDate), IsActive: !!IsActive, Description: Description || null },
  });
  return Response.json(created);
}
