import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { GroupDetailView } from "./GroupDetailView";

export default async function GroupDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  if (Number.isNaN(id)) notFound();
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string })?.role ?? "student";

  const g = await prisma.projectGroup.findUnique({
    where: { ProjectGroupID: id },
    include: {
      projectType: true,
      guide: true,
      convener: true,
      expert: true,
      academicYear: true,
      members: { include: { student: true } },
      documents: true,
    },
  });
  if (!g) notFound();

  // Student: only if member
  if (role === "student") {
    const uid = (session?.user as { uid?: string })?.uid;
    const isMember = g.members.some((m) => m.StudentID === Number(uid));
    if (!isMember) notFound();
  }

  return <GroupDetailView group={JSON.parse(JSON.stringify(g))} role={role} />;
}
