import { CardsGroup } from "@/components";
import { AssetCard } from "./components";
import { featuredAssets, trendingAssets } from "@/../mocks/featuredAssetsMocks";
import useSearchAssetsByName from "@/hooks/useSearchAssetsByName";
import { Asset } from "@/global/types";

const FeaturedContent = () => {
  const filterDataBySearch = useSearchAssetsByName<Asset>();

  return (
    <div className="flex flex-col gap-6">
      <CardsGroup
        title="Featured"
        description="Curated top picks of this week"
        data={filterDataBySearch(featuredAssets)}
        CardComponent={AssetCard}
      />
      <CardsGroup
        title="Trending"
        description="Most popular by community"
        data={filterDataBySearch(trendingAssets)}
        CardComponent={AssetCard}
      />
    </div>
  );
};

export default FeaturedContent;
