import { eq, relations, sql } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, index, bigint, jsonb, pgView } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid"

const genId = () => nanoid()
export const user = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    image: text("image"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
    role: text("role"),
    banned: boolean("banned").default(false),
    banReason: text("ban_reason"),
    banExpires: timestamp("ban_expires"),
});

export const account = pgTable(
    "account",
    {
        id: text("id").primaryKey(),
        accountId: text("account_id").notNull(),
        providerId: text("provider_id").notNull(),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        accessToken: text("access_token"),
        refreshToken: text("refresh_token"),
        idToken: text("id_token"),
        accessTokenExpiresAt: timestamp("access_token_expires_at"),
        refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
        scope: text("scope"),
        password: text("password"),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
    },
    (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
    "verification",
    {
        id: text("id").primaryKey(),
        identifier: text("identifier").notNull(),
        value: text("value").notNull(),
        expiresAt: timestamp("expires_at").notNull(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .defaultNow()
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
    },
    (table) => [index("verification_identifier_idx").on(table.identifier)],
);

type Status = "pending" | "completed" | "failed";

export const projeto = pgTable(
    "projeto",
    {
        id: text("id").$default(genId).primaryKey(),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        title: text().notNull(),
        summary: text(),
        thumb: text(),
        status: text("status").$type<Status>().default("pending"),
        language_default: text().default("en"),
        duration: bigint({ mode: "number" }),
        subtitle: jsonb().$type<
            {
                default: boolean;
                language: string;
                url: string;
            }[]
        >(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .defaultNow()
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
        topics: jsonb().$type<
            {
                thumb: string;
                start: number;
                end: number;
                duration: number;
                url: string;
                title: string;
            }[]
        >(),
        file: jsonb().$type<{
            type: "video";
            url: string;
            size: number;
            duration: number;
        }>(),
        upload: text()
    },
    (table) => [
        index("transcription_userId_idx").on(table.userId),
    ]
);

export const projetosProcessadosDurationView = pgView(
    "projetos_processados_duration_view"
).as((qb) =>
    qb
        .select({
            quantidade: sql<number>`count(*)`.as("quantidade"),
            total: sql<number>`sum(${projeto.duration})`.as("total"),
            userId: projeto.userId,
        })
        .from(projeto)
        .where(eq(projeto.status, "completed"))
        .groupBy(projeto.userId)
);

export const projetosPendentesView = pgView("projetos_pendentes_view").as((qb) => qb.select({
    // 1. Usar COUNT(*) para contar todas as linhas (projetos)
    total: sql<number>`count(*)`.as("total"),
    userId: projeto.userId,
})
    .from(projeto)
    // 2. A condição WHERE filtra apenas os projetos pendentes
    .where(eq(projeto.status, "pending"))
    .groupBy(projeto.userId)
);

export const projetoRelations = relations(projeto, ({ one }) => ({
    user: one(user, {
        fields: [projeto.userId],
        references: [user.id],
    }),
}));

export const userRelations = relations(user, ({ many }) => ({
    accounts: many(account),
    projetos: many(projeto)
}));

export const accountRelations = relations(account, ({ one }) => ({
    user: one(user, {
        fields: [account.userId],
        references: [user.id],
    }),
}));
