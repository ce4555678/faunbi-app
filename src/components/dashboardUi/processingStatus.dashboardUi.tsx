"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { X, FileVideo, FileAudio } from "lucide-react";
import { toast } from "sonner";

interface ProcessingItem {
  id: string;
  name: string;
  type: "video" | "audio";
  progress: number;
  estimatedTime: string;
}

const processingItems: ProcessingItem[] = [
  {
    id: "1",
    name: "Entrevista com CEO - Q4 2024.mp4",
    type: "video",
    progress: 67,
    estimatedTime: "2 min restantes",
  },
  {
    id: "2",
    name: "Podcast Episódio 42.mp3",
    type: "audio",
    progress: 34,
    estimatedTime: "5 min restantes",
  },
  {
    id: "3",
    name: "Reunião de equipe 25-11.mp4",
    type: "video",
    progress: 89,
    estimatedTime: "1 min restante",
  },
];

export function ProcessingStatusDashboardUi() {
  const handleCancel = (id: string, name: string) => {
    toast.error(`Processamento de "${name}" cancelado`);
  };

  if (processingItems.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Processamento Atual</CardTitle>
          <CardDescription>Nenhum arquivo sendo processado</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-muted p-4 mb-4">
              <FileVideo className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Seus uploads aparecerão aqui
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processamento Atual</CardTitle>
        <CardDescription>
          {processingItems.length}{" "}
          {processingItems.length === 1
            ? "arquivo sendo processado"
            : "arquivos sendo processados"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {processingItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 flex-1 min-w-0">
                  {item.type === "video" ? (
                    <FileVideo className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  ) : (
                    <FileAudio className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.estimatedTime}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0"
                  onClick={() => handleCancel(item.id, item.name)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                <Progress value={item.progress} className="h-2" />
                <p className="text-xs text-muted-foreground text-right">
                  {item.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
