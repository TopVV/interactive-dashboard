import { CardsGroup } from "@/components";
import { StoryboardCard } from "./components";
import {
  CompanyStoryboardDataMocks,
  UsersStoryboardDataMocks,
} from "@/../mocks/storyboardDataMocks";
import useSearchAssetsByName from "@/hooks/useSearchAssetsByName";
import { Storyboard } from "@/global/types";

const StoryboardsContent = () => {
  const filterDataBySearch = useSearchAssetsByName<Storyboard>();

  return (
    <div className="flex flex-col gap-6">
      <CardsGroup
        title="Company Storyboards"
        description="Company's core analytics storyboards"
        data={filterDataBySearch(CompanyStoryboardDataMocks)}
        CardComponent={StoryboardCard}
      />
      <CardsGroup
        title="Users Storyboards"
        description="Users' and community's analytics storyboards"
        data={filterDataBySearch(UsersStoryboardDataMocks)}
        CardComponent={StoryboardCard}
      />
    </div>
  );
};

export default StoryboardsContent;
