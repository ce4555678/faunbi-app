import DashboardUi from "@/components/dashboardUi";
import { CheckCircle, Clock, FileText, Loader } from "lucide-react";

export default function StateSkeleton() {
  const stats = [
    {
      title: "Total de Transcrições",
      value: 0,
      icon: <FileText className="h-5 w-5 text-primary" />,
      color: "bg-primary/10",
    },
    {
      title: "Horas Transcritas",
      value: "00 min",
      icon: <Clock className="h-5 w-5 text-green-600" />,
      color: "bg-green-100",
    },
    {
      title: "Em Processamento",
      value: 0,
      icon: <Loader className="h-5 w-5 text-yellow-600" />,
      color: "bg-yellow-100",
    },
    {
      title: "Concluídas Hoje",
      value: 0,
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      color: "bg-green-100",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <DashboardUi.statCard {...stat} />
        </div>
      ))}
    </div>
  );
}
