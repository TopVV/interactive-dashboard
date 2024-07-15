import { AssetModal, Typography } from "@/components";
import { kpis, businessQuestions } from "@/../mocks/modals/kpiModalMockData";
import Metrics from "@/containers/ModalsContainer/components/Metrics/Metrics";
import BusinessQuestions from "@/containers/ModalsContainer/components/BusinessQuestions/BusinessQuestions";
import { ChartBlock, MixBarChart } from "../../../Charts";

const KPIModal = () => {
  return (
    <AssetModal
      title="KPIs"
      type="KPIs"
      description="Key Performance Indicators. They are the measurable values that demonstrate how effectively a company is achieving key business objectives."
      tags={["performance", "indicators"]}
    >
      <Typography variant="h5">Key Performance Indicators/Metrics</Typography>
      <Metrics metricsData={kpis} />
      <ChartBlock title="Revenue" description="Revenue by month">
        <MixBarChart />
      </ChartBlock>
      <BusinessQuestions questionsData={businessQuestions} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Typography variant="h5">Here some revenue calculations</Typography>
          <Typography variant="body1">
            In the preliminary stages, we focused on the interaction between
            figures such as 58, 32, and 76. These numbers were subjected to
            rigorous scrutiny, revealing fascinating patterns in their
            mathematical relationships. Through meticulous computation, we
            discerned that the sum of 58 and 32 amounts to 90, while further
            exploration unveiled that 76 multiplied by 2 yields 152.
          </Typography>
        </div>

      </div>
    </AssetModal>
  );
};

export default KPIModal;
