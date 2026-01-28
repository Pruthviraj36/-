import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";
import bcrypt from "bcrypt";

export async function GET() {
    await requireRole(["admin", "faculty"]);
    const list = await prisma.student.findMany({
        orderBy: { StudentName: "asc" },
    });
    return Response.json(list);
}

export async function POST(req: NextRequest) {
    await requireRole(["admin", "faculty"]);
    const b = await req.json();
    const { StudentName, Email, Password, DepartmentID, AcademicYearID, Phone, Description } = b;
    if (!StudentName || !Email || !Password) return Response.json({ error: "Required fields missing" }, { status: 400 });
    const hash = await bcrypt.hash(Password, 10);
    const created = await prisma.student.create({
        data: {
            StudentName,
            Email,
            Password: hash,
            DepartmentID: DepartmentID ? Number(DepartmentID) : null,
            AcademicYearID: AcademicYearID ? Number(AcademicYearID) : null,
            Phone: Phone || null,
            Description: Description || null
        }
    });
    const { Password: _p, ...out } = created;
    return Response.json(out);
}
