import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash("admin123", 10);
  const admin = await prisma.staff.upsert({
    where: { Email: "admin@spms.local" },
    update: {},
    create: {
      StaffName: "System Admin",
      Email: "admin@spms.local",
      Password: hash,
      Role: "Admin",
    },
  });
  console.log("Admin:", admin.Email);

  const fHash = await bcrypt.hash("faculty123", 10);
  const faculty = await prisma.staff.upsert({
    where: { Email: "guide@spms.local" },
    update: {},
    create: {
      StaffName: "Dr. Faculty Guide",
      Email: "guide@spms.local",
      Password: fHash,
      Role: "Faculty",
    },
  });
  console.log("Faculty:", faculty.Email);

  const sHash = await bcrypt.hash("student123", 10);
  const student = await prisma.student.upsert({
    where: { Email: "student@spms.local" },
    update: {},
    create: {
      StudentName: "Test Student",
      Email: "student@spms.local",
      Password: sHash,
    },
  });
  console.log("Student:", student.Email);

  const pt = await prisma.projectType.upsert({
    where: { ProjectTypeID: 1 },
    update: {},
    create: { ProjectTypeName: "Minor Project", Description: "Minor/ET subject project" },
  });
  console.log("ProjectType:", pt.ProjectTypeName);

  const ay = await prisma.academicYear.upsert({
    where: { AcademicYearID: 1 },
    update: {},
    create: {
      YearName: "2024-25",
      StartDate: new Date("2024-06-01"),
      EndDate: new Date("2025-05-31"),
      IsActive: true,
    },
  });
  console.log("AcademicYear:", ay.YearName);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => { console.error(e); prisma.$disconnect(); process.exit(1); });
