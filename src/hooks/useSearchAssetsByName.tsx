import { useSearchParams } from "next/navigation";
import { QUERY_PARAM_SEARCH } from "@/routes/params";
import { Asset, KPI, Layout, Storyboard } from "@/global/types";
import { useCallback } from "react";

const useSearchAssetsByName = <
  T extends Asset | KPI | Layout | Storyboard,
>() => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get(QUERY_PARAM_SEARCH);

  return useCallback(
    (data: T[]): T[] => {
      if (!searchValue) {
        return data;
      }
      return data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
    },
    [searchValue],
  );
};

export default useSearchAssetsByName;
