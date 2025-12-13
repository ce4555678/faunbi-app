"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { date: "19/11", transcriptions: 4 },
  { date: "20/11", transcriptions: 7 },
  { date: "21/11", transcriptions: 5 },
  { date: "22/11", transcriptions: 9 },
  { date: "23/11", transcriptions: 6 },
  { date: "24/11", transcriptions: 11 },
  { date: "25/11", transcriptions: 8 },
];

const chartConfig = {
  transcriptions: {
    label: "Transcrições",
    color: "#8b5cf6",
  },
};

export function ActivityChartDashboardUi() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade Semanal</CardTitle>
        <CardDescription>
          Número de transcrições processadas nos últimos 7 dias
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-75 w-full">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient
                id="fillTranscriptions"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="transcriptions"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#fillTranscriptions)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
