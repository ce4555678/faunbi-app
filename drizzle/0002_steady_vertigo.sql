ALTER TABLE "projeto" ADD COLUMN "summary" text;--> statement-breakpoint
ALTER TABLE "projeto" ADD COLUMN "topics" jsonb;--> statement-breakpoint
ALTER TABLE "projeto" DROP COLUMN "sumary";--> statement-breakpoint
ALTER TABLE "projeto" DROP COLUMN "cortes";