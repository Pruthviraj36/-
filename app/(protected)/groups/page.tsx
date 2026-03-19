import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { GroupsView } from "./GroupsView";

export default async function GroupsPage() {
  const s = await getServerSession(authOptions);
  const role = (s?.user as { role?: string })?.role ?? "student";
  return (
    <>
      <h1 className="h2 mb-lg">Project Groups</h1>
      <GroupsView role={role} />
    </>
  );
}
