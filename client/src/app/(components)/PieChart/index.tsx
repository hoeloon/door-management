import { Building, Door } from "@/state/api";
import React from "react";
import {
  PieChart as RePieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = { doors: Door[]; typeOfData: string };
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#9542f5", "#FF8042"];

const PieChartRe = ({ doors, typeOfData }: Props) => {
  const result: any = () => {
    const connectionStatusCounts = doors.reduce((acc: any, door: any) => {
      const condition = door[typeOfData];
      if (acc[condition]) {
        acc[condition]++;
      } else {
        acc[condition] = 1;
      }
      return acc;
    }, {});
    const fdata = Object?.entries(connectionStatusCounts)?.map(
      ([name, value]) => ({
        name,
        value,
      })
    );
    console.log("fdata", fdata);
    return fdata;
  };
  return (
    <>
      {result() ? (
        <>
          <ResponsiveContainer width={300} height={300}>
            <RePieChart>
              <Pie
                data={result()}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {result().map((entry: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              {/* <Legend /> */}
            </RePieChart>
          </ResponsiveContainer>
        </>
      ) : (
        <>No Data</>
      )}
    </>
  );
};

export default PieChartRe;
