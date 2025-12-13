import DashboardUi from "@/components/dashboardUi";
import { CheckCircle, Clock, FileText, Loader } from "lucide-react";
import getStateDashboard from "./getstate-dashboard";

export default async function StateDashboard() {
  const getState = await getStateDashboard();

  const stats = [
    {
      title: "Total de Transcrições",
      value: getState.totalTranscricoes,
      icon: <FileText className="h-5 w-5 text-primary" />,
      color: "bg-primary/10",
    },
    {
      title: "Horas Transcritas",
      value: getState.horasTranscritas,
      icon: <Clock className="h-5 w-5 text-green-600" />,
      color: "bg-green-100",
    },
    {
      title: "Em Processamento",
      value: getState.emProcessamento,
      icon: <Loader className="h-5 w-5 text-yellow-600" />,
      color: "bg-yellow-100",
    },
    {
      title: "Concluídas Hoje",
      value: getState.concluidasHoje,
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
