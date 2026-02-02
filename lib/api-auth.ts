import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function requireAuth() {
  const s = await getServerSession(authOptions);
  if (!s?.user) {
    throw new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
  }
  return s;
}

export async function requireRole(allowed: string[]) {
  const s = await requireAuth();
  const r = (s.user as { role?: string }).role;
  if (!r || !allowed.includes(r)) {
    throw new Response(JSON.stringify({ error: "Forbidden" }), { status: 403, headers: { "Content-Type": "application/json" } });
  }
  return s;
}
