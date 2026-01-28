import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { MastersView } from "./MastersView";

export default async function MastersPage() {
  const s = await getServerSession(authOptions);
  const role = (s?.user as { role?: string })?.role;
  if (role !== "admin") redirect("/dashboard");
  return (
    <>
      <h1 className="h2" style={{ marginBottom: "var(--space-lg)" }}>Masters</h1>
      <MastersView />
    </>
  );
}
