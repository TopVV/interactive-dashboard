import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  QUERY_PARAM_ID,
  QUERY_PARAM_REQUEST_ACCESS,
  QUERY_PARAM_SEARCH,
  QUERY_PARAM_TAB,
} from "@/routes/params";
import { AppTabParam } from "@/routes/types";
import { useCallback } from "react";

const useUpdateSearchParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateIdSearchParam = useCallback(
    ({ id, tabValue }: { id: string; tabValue: AppTabParam }) => {
      const params = new URLSearchParams(searchParams);
      params.set(QUERY_PARAM_TAB, tabValue);
      params.set(QUERY_PARAM_ID, id.toString());
      replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [pathname, replace, searchParams],
  );

  const deleteIdSearchParam = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete(QUERY_PARAM_ID);
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [pathname, replace, searchParams]);

  const updateTabSearchParam = useCallback(
    (tabValue: AppTabParam) => {
      const params = new URLSearchParams(searchParams);
      params.set(QUERY_PARAM_TAB, tabValue);
      replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [pathname, replace, searchParams],
  );

  const addRequestAccessSearchParam = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set(QUERY_PARAM_REQUEST_ACCESS, "true");
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [pathname, replace, searchParams]);

  const deleteRequestAccessSearchParam = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete(QUERY_PARAM_REQUEST_ACCESS);
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [pathname, replace, searchParams]);

  const updateSearchValueParam = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(QUERY_PARAM_SEARCH, value);
      replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [pathname, replace, searchParams],
  );

  const deleteSearchValueParam = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete(QUERY_PARAM_SEARCH);
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [pathname, replace, searchParams]);

  return {
    updateIdSearchParam,
    deleteIdSearchParam,
    updateTabSearchParam,
    addRequestAccessSearchParam,
    deleteRequestAccessSearchParam,
    updateSearchValueParam,
    deleteSearchValueParam,
  };
};

export default useUpdateSearchParams;
