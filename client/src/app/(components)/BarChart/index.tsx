import { Door } from "@/state/api";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = { doors: Door[] };

const BarChartRe = ({ doors }: Props) => {
  type BuildingSummary = {
    buildingName: string;
    connectionStatusCount: { Online: number; Offline: number };
    connectionTypeCount: { Wired: number; Wireless: number };
  };

  function summarizeBuildingData(doors: Door[]): BuildingSummary[] {
    const buildingMap = new Map<string, BuildingSummary>();

    doors.forEach((door) => {
      const { buildingName, connectionStatus, connectionType } = door;

      if (!buildingMap.has(buildingName)) {
        buildingMap.set(buildingName, {
          buildingName,
          connectionStatusCount: { Online: 0, Offline: 0 },
          connectionTypeCount: { Wired: 0, Wireless: 0 },
        });
      }

      const summary = buildingMap.get(buildingName)!;

      // Update connection status count
      summary.connectionStatusCount[connectionStatus as "Online" | "Offline"]++;

      // Update connection type count
      summary.connectionTypeCount[connectionType as "Wired" | "Wireless"]++;
    });

    return Array.from(buildingMap.values());
  }
  const xxx = summarizeBuildingData(doors);
  console.log("xx", xxx);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={summarizeBuildingData(doors)}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="buildingName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="connectionStatusCount.Online"
          stackId="a"
          fill="#8884d8"
        />
        <Bar
          dataKey="connectionStatusCount.Offline"
          stackId="a"
          fill="#82ca9d"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartRe;
