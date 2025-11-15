"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Male",
    color: "#2563eb",
  },
  mobile: {
    label: "Female",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "June", desktop: 186, mobile: 80 },
  { month: "July", desktop: 305, mobile: 200 },
  { month: "August", desktop: 237, mobile: 120 },
  { month: "September", desktop: 73, mobile: 190 },
  { month: "October", desktop: 209, mobile: 130 },
  { month: "November", desktop: 214, mobile: 140 },
];

const AppAreaChart = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
