import { Card } from "@/components";
import { Clipboard } from "react-feather";

import type { Storyboard } from "@/global/types";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { useCallback } from "react";
import { APP_TABS_PARAM } from "@/routes/params";

type StoryboardCardProps = Storyboard;

const StoryboardCard = ({
  id,
  name,
  description,
  affiliates,
}: StoryboardCardProps) => {
  const { updateIdSearchParam } = useUpdateSearchParams();

  const onCardClick = useCallback(() => {
    updateIdSearchParam({ id, tabValue: APP_TABS_PARAM.storyboards.value });
  }, [id, updateIdSearchParam]);

  return (
    <Card
      title={name}
      description={description}
      icon={Clipboard}
      onClick={onCardClick}
    >
      <div className="font-semibold text-slate-400">{affiliates}</div>
    </Card>
  );
};

export default StoryboardCard;
