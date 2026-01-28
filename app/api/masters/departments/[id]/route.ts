import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await requireRole(["admin"]);
    const id = Number((await params).id);
    const b = await req.json();
    const { DepartmentName, AcademicYearID, Description } = b;

    const updated = await prisma.department.update({
        where: { DepartmentID: id },
        data: { DepartmentName, AcademicYearID, Description: Description || null }
    });
    return Response.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await requireRole(["admin"]);
    const id = Number((await params).id);
    await prisma.department.delete({ where: { DepartmentID: id } });
    return Response.json({ ok: true });
}
