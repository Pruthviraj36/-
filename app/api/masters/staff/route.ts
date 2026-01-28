import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/api-auth";

export async function GET() {
  await requireRole(["admin"]);
  const list = await prisma.staff.findMany({
    orderBy: { StaffName: "asc" },
    select: { StaffID: true, StaffName: true, Phone: true, Email: true, Role: true, Description: true, Created: true, Modified: true },
  });
  return Response.json(list);
}

export async function POST(req: NextRequest) {
  await requireRole(["admin"]);
  const b = await req.json();
  const { StaffName, Phone, Email, Password, Role, Description } = b;
  if (!StaffName || !Email || !Password) return Response.json({ error: "StaffName, Email, Password required" }, { status: 400 });
  const hash = await bcrypt.hash(Password, 10);
  const created = await prisma.staff.create({
    data: {
      StaffName,
      Phone: Phone || null,
      Email,
      Password: hash,
      Role: Role === "Admin" ? "Admin" : "Faculty",
      Description: Description || null,
    },
  });
  const { Password: _p, ...out } = created;
  return Response.json(out);
}
