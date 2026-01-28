import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await requireRole(["admin"]);
    const id = Number((await params).id);
    const b = await req.json();
    const { YearName, StartDate, EndDate, IsActive, Description } = b;

    if (IsActive) {
        await prisma.academicYear.updateMany({ where: { AcademicYearID: { not: id } }, data: { IsActive: false } });
    }

    const updated = await prisma.academicYear.update({
        where: { AcademicYearID: id },
        data: {
            YearName,
            StartDate: new Date(StartDate),
            EndDate: new Date(EndDate),
            IsActive: !!IsActive,
            Description: Description || null
        }
    });
    return Response.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await requireRole(["admin"]);
    const id = Number((await params).id);
    await prisma.academicYear.delete({ where: { AcademicYearID: id } });
    return Response.json({ ok: true });
}
