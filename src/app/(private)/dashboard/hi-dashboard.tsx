import { auth } from "@/lib/auth";
import { cacheLife, cacheTag } from "next/cache";
import { headers } from "next/headers";

export default async function HiDashboard() {
  "use cache: private";
  cacheLife("days");
  cacheTag("hiDashboard");
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const firstName = session?.user?.name
    .split(" ")
    .slice(0, 1)[0]
    .toLocaleLowerCase();
  return (
    <h1 className="text-3xl font-bold tracking-tight capitalize">
      Olá, {firstName}! 👋
    </h1>
  );
}
