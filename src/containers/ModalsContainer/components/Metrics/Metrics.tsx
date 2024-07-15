import { Typography } from "@/components";
import { Info as InfoIcon } from "react-feather";

type MetricsProps = {
  metricsData: {
    name: string;
    value: number | string;
    tooltip?: string;
  }[];
};

const Metrics = ({ metricsData }: MetricsProps) => (
  <div className="flex text-black">
    {metricsData.map((kpi) => (
      <div
        key={kpi.name}
        className="flex flex-col items-center gap-1 border-r-2 border-slate-400 px-8 py-2 last:border-r-0"
      >
        <Typography variant="body1" className="font-bold">
          {kpi.value}
        </Typography>
        <Typography
          variant="subtitle2"
          className="flex flex-row items-center gap-1 text-sm"
        >
          {kpi.name} <InfoIcon size={16} />
        </Typography>
      </div>
    ))}
  </div>
);

export default Metrics;
