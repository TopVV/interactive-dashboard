import { type ReactNode, useMemo, useState } from "react";
import Typography from "../Typography/Typography";
import type { Asset, KPI, Layout, Storyboard } from "@/global/types";

type CardsGroupProps<T> = {
  title: string;
  description: string;
  data: T[];
  CardComponent: (props: T) => ReactNode;
};

const CardsGroup = <T extends Asset | Layout | Storyboard | KPI>({
  title,
  description,
  data,
  CardComponent,
}: CardsGroupProps<T>) => {
  const [isViewAll, setIsViewAll] = useState(false);
  const dataToShow = useMemo(
    () => (isViewAll ? data : data.slice(0, 4)),
    [data, isViewAll],
  );

  const toggleViewAll = () => {
    setIsViewAll((prev) => !prev);
  };

  return (
    <>
      <div>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
        <div className="mt-8 flex flex-row flex-wrap justify-between gap-y-5">
          {dataToShow.length ? (
            dataToShow.map((item) => <CardComponent key={item.id} {...item} />)
          ) : (
            <Typography variant="subtitle2">No items to show</Typography>
          )}
        </div>
      </div>
      {data.length > 4 ? (
        <button
          onClick={toggleViewAll}
          className="m-auto w-52 rounded-lg bg-slate-400 px-5 py-3 font-semibold text-white"
        >
          {isViewAll ? "Show less" : "Show all"}
        </button>
      ) : null}
    </>
  );
};

export default CardsGroup;
