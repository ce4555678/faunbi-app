import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
import { Link } from "next-view-transitions";

export function QuickStatsDashboardUi() {
  const actions = [
    {
      title: "Novo Upload",
      description: "Processar novo conteúdo",
      icon: Upload,
      link: "/upload",
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      title: "Ver Todos",
      description: "Seus Projetos",
      icon: FileText,
      link: "/projetos",
      color: "bg-green-100 text-green-600 hover:bg-green-200",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ações Rápidas</CardTitle>
        <CardDescription>
          Acesso rápido às principais funcionalidades
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {actions.map((action) => (
            <Link
              className="w-full"
              key={action.title}
              href={action.link}
              prefetch
            >
              <Button
                variant="outline"
                className="h-auto w-full flex-col items-start p-4 hover:shadow-md transition-all"
                //   onClick={action.onClick}
              >
                <div className={`rounded-lg p-2 mb-3 ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">{action.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
