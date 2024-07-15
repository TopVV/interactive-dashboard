import { BarChart2 } from "react-feather";
import { Card } from "@/components";
import { type KPI } from "@/global/types";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { useCallback } from "react";
import { APP_TABS_PARAM } from "@/routes/params";

type KPICardProps = KPI;

const KPICard = ({ id, name, description, calculation }: KPICardProps) => {
  const { updateIdSearchParam } = useUpdateSearchParams();

  const onCardClick = useCallback(() => {
    updateIdSearchParam({ id, tabValue: APP_TABS_PARAM.kpi.value });
  }, [id, updateIdSearchParam]);

  return (
    <Card
      title={name}
      description={description}
      icon={BarChart2}
      onClick={onCardClick}
    >
      <div className="font-semibold text-slate-400">
        Calculation : {calculation}
      </div>
    </Card>
  );
};

export default KPICard;
