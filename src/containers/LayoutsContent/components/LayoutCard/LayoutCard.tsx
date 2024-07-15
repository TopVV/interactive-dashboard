import { Layout as LayoutIcon } from "react-feather";
import { Card } from "@/components";

import { type Layout } from "@/global/types";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { useCallback } from "react";
import { APP_TABS_PARAM } from "@/routes/params";

type LayoutCardProps = Layout;

const LayoutCard = ({
  id,
  name,
  description,
  amountOfPages,
}: LayoutCardProps) => {
  const { updateIdSearchParam } = useUpdateSearchParams();

  const onCardClick = useCallback(() => {
    updateIdSearchParam({ id, tabValue: APP_TABS_PARAM.layouts.value });
  }, [id, updateIdSearchParam]);

  return (
    <Card
      title={name}
      description={description}
      icon={LayoutIcon}
      onClick={onCardClick}
    >
      <div className="font-semibold text-slate-400">
        Amount of pages: {amountOfPages}
      </div>
    </Card>
  );
};

export default LayoutCard;
