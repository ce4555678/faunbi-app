import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HiDashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const firstName = session?.user?.name.split(" ").slice(0, 1);
  return (
    <h1 className="text-3xl font-bold tracking-tight">Olá, {firstName}! 👋</h1>
  );
}
