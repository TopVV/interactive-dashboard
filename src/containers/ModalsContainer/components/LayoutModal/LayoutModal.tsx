import Image from "next/image";
import { AssetModal } from "@/components";
import { kpis, businessQuestions } from "@/../mocks/modals/layoutModalMockData";
import BusinessQuestions from "@/containers/ModalsContainer/components/BusinessQuestions/BusinessQuestions";
import Metrics from "@/containers/ModalsContainer/components/Metrics/Metrics";
import layoutImage from "@/assets/imags/html-layout-example.webp";

const LayoutModal = () => (
  <AssetModal
    title="Intes"
    type="Layout"
    description="Those options are already baked in with this model shoot me an email
          clear blue water but we need distributors to evanglize the new line to
          local markets."
    tags={["comms", "coverage", "stakeholders"]}
  >
    <Metrics metricsData={kpis} />
    <Image src={layoutImage} alt="layout example" />
    <BusinessQuestions questionsData={businessQuestions} />
  </AssetModal>
);

export default LayoutModal;
