// I usually separate this into label and value since later we can have two or more
// words as a tab, and we want to have flexibility to change this without changing the value

export const APP_TABS_PARAM: Record<string, { label: string; value: string }> =
  {
    kpi: {
      label: "KPI",
      value: "kpi",
    },
    layouts: {
      label: "Layouts",
      value: "layouts",
    },
    storyboards: {
      label: "Storyboards",
      value: "storyboards",
    },
    featured: {
      label: "Featured",
      value: "featured",
    },
  };

export const QUERY_PARAM_TAB = "tab";
export const QUERY_PARAM_ID = "id";
export const QUERY_PARAM_SEARCH = "search";
export const QUERY_PARAM_REQUEST_ACCESS = "requestAccess";
