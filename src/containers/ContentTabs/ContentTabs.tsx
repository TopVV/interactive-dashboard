import { useSearchParams } from "next/navigation";
import { APP_TABS_PARAM, QUERY_PARAM_TAB } from "@/routes/params";
import FeaturedContent from "../FeaturedContent/FeaturedContent";
import KPIContent from "../KPIContent/KPIContent";
import LayoutsContent from "../LayoutsContent/LayoutsContent";
import StoryboardsContent from "../StoryboardsContent/StoryboardsContent";
import { useCallback, useMemo } from "react";
import { AppTabParam } from "@/routes/types";
import cn from "classnames";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

const CONTENT_TABS = [
  { route: APP_TABS_PARAM.featured, content: <FeaturedContent /> },
  { route: APP_TABS_PARAM.kpi, content: <KPIContent /> },
  { route: APP_TABS_PARAM.layouts, content: <LayoutsContent /> },
  {
    route: APP_TABS_PARAM.storyboards,
    content: <StoryboardsContent />,
  },
];

const ContentTabs = () => {
  const { updateTabSearchParam } = useUpdateSearchParams();
  const searchParams = useSearchParams();

  const activeTab = useMemo(
    () =>
      searchParams.get(QUERY_PARAM_TAB?.toString()) ||
      APP_TABS_PARAM.featured.value,
    [searchParams],
  );

  const onTabChange = useCallback(
    (tabValue: AppTabParam) => {
      updateTabSearchParam(tabValue);
    },
    [updateTabSearchParam],
  );

  return (
    <>
      <div className="flex w-full gap-1 rounded bg-slate-200 p-1">
        {CONTENT_TABS.map(({ route: { label, value } }) => {
          const isActive = value === activeTab;

          return (
            <button
              key={label}
              className={cn(
                "w-full rounded px-8 py-1 font-semibold text-slate-400",
                {
                  "text-slate-950": isActive,
                  "bg-white": isActive,
                  "hover:bg-white": !isActive,
                },
              )}
              onClick={() => {
                onTabChange(value);
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
      {CONTENT_TABS.map(({ route: { value, label }, content }) => (
        <div
          key={label}
          className={cn("w-full", { hidden: activeTab !== value })}
        >
          {content}
        </div>
      ))}
    </>
  );
};

export default ContentTabs;
