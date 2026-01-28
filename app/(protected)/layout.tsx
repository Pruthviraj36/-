import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/layout/AppShell";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  const name = session.user.name ?? "User";
  const role = (session.user as { role?: string }).role ?? "student";
  return <AppShell name={name} role={role}>{children}</AppShell>;
}
