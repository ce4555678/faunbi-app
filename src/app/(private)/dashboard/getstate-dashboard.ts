import db from "@/db";
import { projeto, projetosPendentesView, projetosProcessadosDurationView } from "@/db/schema";
import { auth } from "@/lib/auth";
import { horasTranscritas } from "@/utils/horas";
import { and, eq, sql } from "drizzle-orm";
import { cacheLife, cacheTag } from "next/cache";
import { headers } from "next/headers";

export default async function getStateDashboard() {
    "use cache: private"
    cacheLife("minutes")
    cacheTag("getStateDashboard")

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const durationAndQuantidade = await db
        .select()
        .from(projetosProcessadosDurationView)
        .where(eq(projetosProcessadosDurationView.userId, session?.user.id || ""));

    const pendentes = await db
        .select()
        .from(projetosPendentesView)
        .where(eq(projetosPendentesView.userId, session?.user.id || ""));

    const concluidasHoje = await db.select({
        total: sql<number>`count(*)`.as("total"),
    }).from(projeto).where(and(
        eq(projeto.userId, session?.user.id || ""),
        eq(projeto.status, "completed"),
        // Adicione aqui a condição para filtrar projetos concluídos hoje
        eq(projeto.createdAt, new Date()) // Exemplo simplificado
    ));

    const stats = {
        totalTranscricoes: durationAndQuantidade[0]?.quantidade ?? 0,
        horasTranscritas: horasTranscritas(durationAndQuantidade[0]?.total ?? 0),
        emProcessamento: pendentes[0]?.total ?? 0,
        concluidasHoje: concluidasHoje[0]?.total ?? 0, // Placeholder temporário
    };

    return stats

}