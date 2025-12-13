import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  // change: string;
  icon: React.ReactNode;
  // trend: "up" | "down";
  color: string;
}

export function StatsCardsDashboardUi({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  return (
    <Card className="hover:shadow-hover transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold tracking-tight">{value}</p>
            {/* <p
              className={cn(
                "text-xs font-medium flex items-center gap-1",
                trend === "up" ? "text-green-600" : "text-red-600"
              )}
            >
              <span>{trend === "up" ? "↑" : "↓"}</span>
              <span>{change}</span>
            </p> */}
          </div>
          <div className={cn("rounded-full p-3", color)}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

// export function StatsCardsDashboardUi() {

//   const stats = [
//     {
//       title: "Total de Transcrições",
//       value: 124,
//       change: "+12% vs mês anterior",
//       icon: <FileText className="h-5 w-5 text-primary" />,
//       trend: "up" as const,
//       color: "bg-primary/10",
//     },
//     {
//       title: "Horas Transcritas",
//       value: "48.5h",
//       change: "+8% vs mês anterior",
//       icon: <Clock className="h-5 w-5 text-green-600" />,
//       trend: "up" as const,
//       color: "bg-green-100",
//     },
//     {
//       title: "Em Processamento",
//       value: 3,
//       change: "2 concluirão em breve",
//       icon: <Loader className="h-5 w-5 text-yellow-600" />,
//       trend: "up" as const,
//       color: "bg-yellow-100",
//     },
//     {
//       title: "Concluídas Hoje",
//       value: 7,
//       change: "+3 vs ontem",
//       icon: <CheckCircle className="h-5 w-5 text-green-600" />,
//       trend: "up" as const,
//       color: "bg-green-100",
//     },
//   ];

//   return (
//     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//       {stats.map((stat, index) => (
//         <div
//           key={stat.title}
//           className="animate-fade-in"
//           style={{ animationDelay: `${index * 0.1}s` }}
//         >
//           <StatCard {...stat} />
//         </div>
//       ))}
//     </div>
//   );
// }
