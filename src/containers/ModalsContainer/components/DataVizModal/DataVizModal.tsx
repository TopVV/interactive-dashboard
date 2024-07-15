import { AssetModal, Typography } from "@/components";
import Metrics from "@/containers/ModalsContainer/components/Metrics/Metrics";
import { kpi } from "@/../mocks/modals/dataVizModalMockData";
import {
  ChartBlock,
  StackedAreaChart,
  TwoLevelPieChart,
} from "../../../Charts";

const DataVizModal = () => (
  <AssetModal
    title="Lorem Ipsum"
    type="Visualization"
    description="Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data."
    tags={["data", "visualization"]}
  >
    <Metrics metricsData={kpi} />
    <ChartBlock title="Sales" description="Sales by month">
      <StackedAreaChart />
    </ChartBlock>
    <ChartBlock title="Users" description="Users by month">
      <TwoLevelPieChart />
    </ChartBlock>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Typography variant="h5">Lorem Ipsum</Typography>
        <Typography variant="body1">
          LOrem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </Typography>
      </div>
      <div className="flex flex-col gap-2">
        <Typography variant="h5">Consectetur Adipiscing</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </Typography>
      </div>
    </div>
  </AssetModal>
);

export default DataVizModal;
