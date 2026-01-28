import { PrismaClient, StaffRole, ProjectGroupStatus, MeetingStatus, DocumentType } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password123", 10);

  console.log("Seeding started...");

  // 1. Academic Years
  const ay1 = await prisma.academicYear.upsert({
    where: { AcademicYearID: 1 },
    update: {},
    create: { YearName: "2023-24", StartDate: new Date("2023-06-01"), EndDate: new Date("2024-05-31"), IsActive: false },
  });
  const ay2 = await prisma.academicYear.upsert({
    where: { AcademicYearID: 2 },
    update: {},
    create: { YearName: "2024-25", StartDate: new Date("2024-06-01"), EndDate: new Date("2025-05-31"), IsActive: true },
  });

  // 2. Departments
  const deptNames = ["Computer Engineering", "Information Technology", "Electronics & Communication", "Mechanical Engineering", "Civil Engineering"];
  const depts = [];
  for (let i = 0; i < deptNames.length; i++) {
    const d = await prisma.department.upsert({
      where: { DepartmentID: i + 1 },
      update: {},
      create: { DepartmentName: deptNames[i], AcademicYearID: ay2.AcademicYearID },
    });
    depts.push(d);
  }

  // 3. Project Types
  const ptNames = ["Minor Project", "Major Project - Phase 1", "Major Project - Phase 2", "Industry Internship", "Research Project"];
  const pts = [];
  for (let i = 0; i < ptNames.length; i++) {
    const pt = await prisma.projectType.upsert({
      where: { ProjectTypeID: i + 1 },
      update: {},
      create: { ProjectTypeName: ptNames[i], Description: `${ptNames[i]} for engineering students` },
    });
    pts.push(pt);
  }

  // 4. Staff
  const staffData = [
    { name: "Dr. Alice Smith", email: "alice@spms.local", role: StaffRole.Admin },
    { name: "Prof. Bob Johnson", email: "bob@spms.local", role: StaffRole.Faculty },
    { name: "Dr. Charlie Brown", email: "charlie@spms.local", role: StaffRole.Faculty },
    { name: "Prof. David Wilson", email: "david@spms.local", role: StaffRole.Faculty },
    { name: "Dr. Eve White", email: "eve@spms.local", role: StaffRole.Faculty },
    { name: "Prof. Frank Miller", email: "frank@spms.local", role: StaffRole.Faculty },
    { name: "Dr. Grace Hopper", email: "grace@spms.local", role: StaffRole.Faculty },
    { name: "Prof. Henry Cavill", email: "henry@spms.local", role: StaffRole.Faculty },
    { name: "Dr. Ivy Ivy", email: "ivy@spms.local", role: StaffRole.Faculty },
    { name: "Prof. Jack Sparrow", email: "jack@spms.local", role: StaffRole.Faculty },
  ];
  const staff = [];
  for (let i = 0; i < staffData.length; i++) {
    const s = await prisma.staff.upsert({
      where: { Email: staffData[i].email },
      update: {},
      create: { StaffName: staffData[i].name, Email: staffData[i].email, Password: password, Role: staffData[i].role },
    });
    staff.push(s);
  }

  // 5. Students
  const students = [];
  for (let i = 1; i <= 40; i++) {
    const s = await prisma.student.upsert({
      where: { Email: `student${i}@spms.local` },
      update: {},
      create: {
        StudentName: `Student Name ${i}`,
        Email: `student${i}@spms.local`,
        Password: password,
        DepartmentID: depts[i % depts.length].DepartmentID,
        AcademicYearID: ay2.AcademicYearID,
      },
    });
    students.push(s);
  }

  // 6. Project Groups
  const groupStatuses = [ProjectGroupStatus.Approved, ProjectGroupStatus.Pending, ProjectGroupStatus.Draft];
  const groups = [];
  for (let i = 1; i <= 10; i++) {
    const g = await prisma.projectGroup.upsert({
      where: { ProjectGroupID: i },
      update: {},
      create: {
        ProjectGroupName: `Group ${String.fromCharCode(64 + i)} ${2024}`,
        ProjectTitle: `Automated System ${i} for Modern Problems`,
        ProjectArea: i % 2 === 0 ? "AI/ML" : "Web Development",
        ProjectTypeID: pts[i % pts.length].ProjectTypeID,
        GuideStaffID: staff[i % staff.length].StaffID,
        Status: groupStatuses[i % groupStatuses.length],
        AcademicYearID: ay2.AcademicYearID,
      },
    });
    groups.push(g);

    // 7. Group Members
    for (let j = 0; j < 3; j++) {
      const studentIdx = (i - 1) * 3 + j;
      if (students[studentIdx]) {
        await prisma.projectGroupMember.upsert({
          where: { ProjectGroupID_StudentID: { ProjectGroupID: g.ProjectGroupID, StudentID: students[studentIdx].StudentID } },
          update: {},
          create: {
            ProjectGroupID: g.ProjectGroupID,
            StudentID: students[studentIdx].StudentID,
            IsGroupLeader: j === 0,
            StudentCGPA: 7 + (i % 3) + (j * 0.1),
          },
        });
      }
    }
  }

  // 8. Meetings
  for (let i = 1; i <= 15; i++) {
    const group = groups[i % groups.length];
    const m = await prisma.projectMeeting.upsert({
      where: { ProjectMeetingID: i },
      update: {},
      create: {
        ProjectGroupID: group.ProjectGroupID,
        GuideStaffID: group.GuideStaffID,
        MeetingDateTime: new Date(Date.now() + (i - 7) * 24 * 60 * 60 * 1000),
        MeetingPurpose: `Review Phase ${i % 3 + 1}`,
        MeetingLocation: i % 2 === 0 ? "Labs" : "Online",
        MeetingStatus: i < 7 ? MeetingStatus.Completed : MeetingStatus.Scheduled,
      },
    });

    // 9. Meeting Attendance
    const members = await prisma.projectGroupMember.findMany({ where: { ProjectGroupID: group.ProjectGroupID } });
    for (const member of members) {
      await prisma.projectMeetingAttendance.upsert({
        where: { ProjectMeetingID_StudentID: { ProjectMeetingID: m.ProjectMeetingID, StudentID: member.StudentID } },
        update: {},
        create: {
          ProjectMeetingID: m.ProjectMeetingID,
          StudentID: member.StudentID,
          IsPresent: true,
          AttendanceRemarks: "Present on time",
        },
      });
    }
  }

  // 10. Documents
  for (let i = 1; i <= 10; i++) {
    const group = groups[i % groups.length];
    await prisma.projectDocument.upsert({
      where: { ProjectDocumentID: i },
      update: {},
      create: {
        ProjectGroupID: group.ProjectGroupID,
        DocumentType: DocumentType.Proposal,
        FileName: `Proposal_Group_${group.ProjectGroupID}.pdf`,
        FilePath: `/uploads/proposal_${i}.pdf`,
        MimeType: "application/pdf",
        UploadedByStaffID: group.GuideStaffID,
      },
    });
  }

  console.log("Seeding finished successfully.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
