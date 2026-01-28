import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ReportsView } from "./ReportsView";

export default async function ReportsPage() {
  const s = await getServerSession(authOptions);
  const role = (s?.user as { role?: string })?.role ?? "student";
  return (
    <>
      <h1 className="h2" style={{ marginBottom: "var(--space-lg)" }}>Reports</h1>
      <ReportsView role={role} />
    </>
  );
}
