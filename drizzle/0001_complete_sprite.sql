CREATE TABLE "projeto" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"sumary" text,
	"status" text DEFAULT 'pending',
	"language_default" text DEFAULT 'en',
	"duration" bigint,
	"subtitle" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"cortes" jsonb,
	"file" jsonb,
	"upload" text
);
--> statement-breakpoint
ALTER TABLE "projeto" ADD CONSTRAINT "projeto_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "transcription_userId_idx" ON "projeto" USING btree ("user_id");