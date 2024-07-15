import { useSearchParams } from "next/navigation";
import {
  LayoutModal,
  KPIModal,
  DataVizModal,
  StoryboardModal,
  RequestAccessModal,
} from "./components";
import {
  APP_TABS_PARAM,
  QUERY_PARAM_ID,
  QUERY_PARAM_REQUEST_ACCESS,
  QUERY_PARAM_TAB,
} from "@/routes/params";

const ModalsContainer = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get(QUERY_PARAM_TAB);
  const requestAccess = searchParams.get(QUERY_PARAM_REQUEST_ACCESS);
  const activeId = searchParams.get(QUERY_PARAM_ID);

  if (requestAccess) {
    return <RequestAccessModal />;
  }

  if (!activeTab || !activeId) {
    return null;
  }

  return (
    <>
      {activeTab === APP_TABS_PARAM.layouts.value && <LayoutModal />}
      {activeTab === APP_TABS_PARAM.kpi.value && <KPIModal />}
      {activeTab === APP_TABS_PARAM.featured.value && <DataVizModal />}
      {activeTab === APP_TABS_PARAM.storyboards.value && <StoryboardModal />}
    </>
  );
};

export default ModalsContainer;
