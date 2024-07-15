import { Typography } from "@/components";
import { ReactNode } from "react";

type ChartBlockProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const ChartBlock = ({ title, description, children }: ChartBlockProps) => {
  return (
    <div className="w-full">
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
      <div className="mt-4 h-80 w-full rounded-2xl bg-white p-4">
        {children}
      </div>
    </div>
  );
};

export default ChartBlock;
