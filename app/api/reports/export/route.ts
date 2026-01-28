import { NextRequest } from "next/server";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  await requireRole(["admin", "faculty"]);
  const type = req.nextUrl.searchParams.get("type") || "progress-report";
  const format = req.nextUrl.searchParams.get("format") || "excel";

  let rows: Record<string, unknown>[] = [];

  if (type === "progress-report") {
    const list = await prisma.projectGroup.findMany({
      include: {
        projectType: { select: { ProjectTypeName: true } },
        guide: { select: { StaffName: true } },
      },
    });
    rows = list.map((g) => ({
      "Group Name": g.ProjectGroupName,
      "Project Title": g.ProjectTitle,
      "Type": g.projectType.ProjectTypeName,
      "Guide": g.guide.StaffName,
      "Status": g.Status,
      "Created": g.Created.toISOString().slice(0, 10),
    }));
  } else if (type === "projects-by-type") {
    const list = await prisma.projectGroup.groupBy({
      by: ["ProjectTypeID"],
      _count: { ProjectGroupID: true },
    });
    const types = await prisma.projectType.findMany();
    const map = Object.fromEntries(types.map((t) => [t.ProjectTypeID, t.ProjectTypeName]));
    rows = list.map((r) => ({ "Project Type": map[r.ProjectTypeID] || "Unknown", "Count": r._count.ProjectGroupID }));
  } else if (type === "projects-by-guide") {
    const list = await prisma.projectGroup.groupBy({
      by: ["GuideStaffID"],
      _count: { ProjectGroupID: true },
    });
    const staff = await prisma.staff.findMany();
    const map = Object.fromEntries(staff.map((s) => [s.StaffID, s.StaffName]));
    rows = list.map((r) => ({ "Guide": map[r.GuideStaffID] || "Unknown", "Count": r._count.ProjectGroupID }));
  } else if (type === "group-members") {
    const list = await prisma.projectGroupMember.findMany({
      include: {
        projectGroup: { select: { ProjectGroupName: true } },
        student: { select: { StudentName: true, Email: true } },
      },
    });
    rows = list.map((m) => ({
      "Group": m.projectGroup.ProjectGroupName,
      "Student": m.student.StudentName,
      "Email": m.student.Email,
      "Leader": m.IsGroupLeader ? "Yes" : "No",
      "CGPA": m.StudentCGPA?.toString() ?? "",
    }));
  } else if (type === "attendance-summary") {
    const list = await prisma.projectMeetingAttendance.groupBy({
      by: ["ProjectMeetingID"],
      _count: { ProjectMeetingAttendanceID: true },
    });
    const meetings = await prisma.projectMeeting.findMany({
      where: { ProjectMeetingID: { in: list.map((l) => l.ProjectMeetingID) } },
      include: { projectGroup: { select: { ProjectGroupName: true } } },
    });
    const att = await prisma.projectMeetingAttendance.findMany({
      where: { ProjectMeetingID: { in: list.map((l) => l.ProjectMeetingID) } },
    });
    const byMeeting: Record<number, { total: number; present: number }> = {};
    for (const a of att) {
      if (!byMeeting[a.ProjectMeetingID]) byMeeting[a.ProjectMeetingID] = { total: 0, present: 0 };
      byMeeting[a.ProjectMeetingID].total++;
      if (a.IsPresent) byMeeting[a.ProjectMeetingID].present++;
    }
    rows = meetings.map((m) => {
      const stats = byMeeting[m.ProjectMeetingID] || { total: 0, present: 0 };
      const pct = stats.total ? Math.round((stats.present / stats.total) * 100) : 0;
      return {
        "Group": m.projectGroup.ProjectGroupName,
        "Date": m.MeetingDateTime.toISOString().slice(0, 10),
        "Total Students": stats.total,
        "Present": stats.present,
        "Attendance %": pct + "%",
      };
    });
  } else {
    return Response.json({ error: "Unknown type" }, { status: 400 });
  }

  if (format === "excel") {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
    return new Response(buf, {
      headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Content-Disposition": `attachment; filename="${type}-${Date.now()}.xlsx"` },
    });
  }

  if (format === "pdf") {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(`SPMS Report: ${type}`, 14, 16);
    const cols = rows[0] ? Object.keys(rows[0] as object) : [];
    const body = rows.map((r) => cols.map((c) => String((r as Record<string, unknown>)[c] ?? "")));
    autoTable(doc, { head: [cols], body, startY: 24, styles: { fontSize: 8 } });
    const buf = doc.output("arraybuffer");
    return new Response(buf, {
      headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${type}-${Date.now()}.pdf"` },
    });
  }

  return Response.json({ error: "format must be excel or pdf" }, { status: 400 });
}
