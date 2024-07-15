// I'd save this types near the store if we would have one but for now it's here

export type ItemEntity = {
  id: string;
  name: string;
  description: string;
};

export type Asset = ItemEntity & {
  date?: string;
};

export type KPI = ItemEntity & {
  calculation: string;
  visualsAvailable: boolean;
};

export type Layout = ItemEntity & {
  amountOfPages: number;
  KPIs: string[];
  layoutType: string;
};

export type Storyboard = ItemEntity & {
  kpisFilters: string;
  affiliates: string;
};
