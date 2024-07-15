import { PieChart } from "react-feather";
import { Card } from "@/components";
import { type Asset } from "@/global/types";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { useCallback } from "react";
import { APP_TABS_PARAM } from "@/routes/params";

type AssetCardProps = Asset;

const AssetCard = ({ id, name, description, date }: AssetCardProps) => {
  const { updateIdSearchParam } = useUpdateSearchParams();

  const onCardClick = useCallback(() => {
    updateIdSearchParam({ id, tabValue: APP_TABS_PARAM.featured.value });
  }, [id, updateIdSearchParam]);

  return (
    <Card
      title={name}
      description={description}
      icon={PieChart}
      onClick={onCardClick}
    >
      {date ? <div className="font-semibold text-slate-400">{date}</div> : null}
    </Card>
  );
};

export default AssetCard;
