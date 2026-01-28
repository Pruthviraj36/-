import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { MeetingsView } from "./MeetingsView";

export default async function MeetingsPage() {
  const s = await getServerSession(authOptions);
  const role = (s?.user as { role?: string })?.role ?? "student";
  return (
    <>
      <h1 className="h2" style={{ marginBottom: "var(--space-lg)" }}>Meetings</h1>
      <MeetingsView role={role} />
    </>
  );
}
