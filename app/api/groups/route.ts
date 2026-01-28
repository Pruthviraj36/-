import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, requireRole } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  const session = await requireAuth();
  const role = (session.user as { role?: string }).role;
  const uid = (session.user as { uid?: string }).uid;

  const include = {
    projectType: { select: { ProjectTypeName: true } },
    guide: { select: { StaffName: true, Email: true } },
    convener: { select: { StaffName: true } },
    expert: { select: { StaffName: true } },
    academicYear: { select: { YearName: true } },
    members: { include: { student: { select: { StudentID: true, StudentName: true, Email: true } } } },
  };

  if (role === "student") {
    const membership = await prisma.projectGroupMember.findFirst({
      where: { StudentID: Number(uid) },
      include: { projectGroup: { include } },
    });
    const list = membership ? [membership.projectGroup] : [];
    return Response.json(list);
  }

  const list = await prisma.projectGroup.findMany({
    include,
    orderBy: { Created: "desc" },
  });
  return Response.json(list);
}

export async function POST(req: NextRequest) {
  await requireRole(["admin", "faculty"]);
  const b = await req.json();
  const {
    ProjectGroupName,
    ProjectTypeID,
    GuideStaffID,
    ProjectTitle,
    ProjectArea,
    ProjectDescription,
    AverageCPI,
    ConvenerStaffID,
    ExpertStaffID,
    AcademicYearID,
    Description,
    Status,
  } = b;
  if (!ProjectGroupName || !ProjectTypeID || !GuideStaffID)
    return Response.json({ error: "ProjectGroupName, ProjectTypeID, GuideStaffID required" }, { status: 400 });
  const created = await prisma.projectGroup.create({
    data: {
      ProjectGroupName,
      ProjectTypeID,
      GuideStaffID,
      ProjectTitle: ProjectTitle || null,
      ProjectArea: ProjectArea || null,
      ProjectDescription: ProjectDescription || null,
      AverageCPI: AverageCPI != null ? Number(AverageCPI) : null,
      ConvenerStaffID: ConvenerStaffID || null,
      ExpertStaffID: ExpertStaffID || null,
      AcademicYearID: AcademicYearID || null,
      Status: Status || "Draft",
      Description: Description || null,
    },
    include: {
      projectType: { select: { ProjectTypeName: true } },
      guide: { select: { StaffName: true } },
    },
  });
  return Response.json(created);
}
