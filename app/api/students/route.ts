import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  await requireRole(["admin", "faculty"]);
  const list = await prisma.student.findMany({
    orderBy: { StudentName: "asc" },
    select: { StudentID: true, StudentName: true, Phone: true, Email: true, DepartmentID: true, AcademicYearID: true, Description: true, Created: true, Modified: true },
  });
  return Response.json(list);
}

export async function POST(req: NextRequest) {
  await requireRole(["admin", "faculty"]);
  const b = await req.json();
  const { StudentName, Phone, Email, Password, DepartmentID, AcademicYearID, Description } = b;
  if (!StudentName || !Email || !Password) return Response.json({ error: "StudentName, Email, Password required" }, { status: 400 });
  const hash = await bcrypt.hash(Password, 10);
  const created = await prisma.student.create({
    data: {
      StudentName,
      Phone: Phone || null,
      Email,
      Password: hash,
      DepartmentID: DepartmentID || null,
      AcademicYearID: AcademicYearID || null,
      Description: Description || null,
    },
  });
  const { Password: _p, ...out } = created;
  return Response.json(out);
}
