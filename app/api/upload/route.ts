import { NextRequest } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

const UPLOAD_DIR = process.env.UPLOAD_DIR || "public/uploads";

export async function POST(req: NextRequest) {
  const session = await requireRole(["admin", "faculty", "student"]);
  const uid = (session.user as { uid?: string }).uid;
  const role = (session.user as { role?: string }).role;

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const projectGroupId = formData.get("projectGroupId");
  const documentType = formData.get("documentType") || "Other";

  if (!file || !projectGroupId) return Response.json({ error: "file and projectGroupId required" }, { status: 400 });
  const groupId = Number(projectGroupId);
  if (Number.isNaN(groupId)) return Response.json({ error: "Invalid projectGroupId" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buf = Buffer.from(bytes);
  const ext = path.extname(file.name) || "";
  const base = path.basename(file.name, ext);
  const safe = `${base}-${Date.now()}${ext}`.replace(/[^a-zA-Z0-9._-]/g, "_");
  const rel = `groups/${groupId}/${safe}`;
  const full = path.join(process.cwd(), UPLOAD_DIR, rel);

  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, buf);

  const created = await prisma.projectDocument.create({
    data: {
      ProjectGroupID: groupId,
      DocumentType: documentType as "Proposal" | "Report" | "Other",
      FileName: file.name,
      FilePath: "/uploads/" + rel,
      MimeType: file.type || null,
      UploadedByStaffID: role !== "student" ? Number(uid) : null,
      UploadedByStudentID: role === "student" ? Number(uid) : null,
    },
  });
  return Response.json(created);
}
