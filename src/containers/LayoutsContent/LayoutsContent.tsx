import { CardsGroup } from "@/components";
import {
  globalLayoutsDataMock,
  regionalLayoutsDataMock,
} from "@/../mocks/layoutsDataMock";
import { LayoutCard } from "./components";
import useSearchAssetsByName from "@/hooks/useSearchAssetsByName";
import { Layout } from "@/global/types";

const LayoutsContent = () => {
  const filterDataBySearch = useSearchAssetsByName<Layout>();

  return (
    <div className="flex flex-col gap-6">
      <CardsGroup
        title="Global Layouts"
        description="Curated top picks of this week from around the world"
        data={filterDataBySearch(globalLayoutsDataMock)}
        CardComponent={LayoutCard}
      />
      <CardsGroup
        title="Regional Layouts"
        description="Most popular by community in your region"
        data={filterDataBySearch(regionalLayoutsDataMock)}
        CardComponent={LayoutCard}
      />
    </div>
  );
};

export default LayoutsContent;
