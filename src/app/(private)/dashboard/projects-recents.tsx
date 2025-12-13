import db from "@/db";
import { projeto } from "@/db/schema";
import { auth } from "@/lib/auth";
import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DashboardUi from "@/components/dashboardUi";
import { cacheLife, cacheTag } from "next/cache";
import { Link } from "next-view-transitions";

export default async function ProjectsRecents() {
  "use cache: private";
  cacheLife("minutes");
  cacheTag("projectsRecentsDashboard");

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user.id)
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transcrições Recentes</CardTitle>
          <CardDescription>Últimas transcrições processadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto flex items-center justify-center">
            <span className="text-center ">Nenhum no momento </span>
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/transcriptions" prefetch>
              <Button variant="outline">Ver Todas as Transcrições</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );

  const projects = await db
    .select()
    .from(projeto)
    .where(eq(projeto.userId, session?.user.id || ""))
    // Adicione esta linha para ordenar pela data de criação em ordem decrescente
    .orderBy(desc(projeto.createdAt))
    .limit(5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transcrições Recentes</CardTitle>
        <CardDescription>Últimas transcrições processadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Duração</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <DashboardUi.itemProjectRecent projects={projects} />
            </TableBody>
          </Table>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/projetos">
            <Button variant="outline">Ver Todos os Projetos</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
