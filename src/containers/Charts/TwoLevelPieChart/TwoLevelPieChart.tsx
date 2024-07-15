import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { twoLevelPieChartData } from "@/../mocks/chartsDataMock";

const TwoLevelPieChart = () => {
  const { data01, data02 } = twoLevelPieChartData;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TwoLevelPieChart;
