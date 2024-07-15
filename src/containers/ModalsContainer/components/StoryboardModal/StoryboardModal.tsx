import { useState } from "react";
import { AssetModal, IconButton, Typography } from "@/components";
import { Unlock as UnlockIcon, Lock as LockIcon } from "react-feather";
import Metrics from "../Metrics/Metrics";
import { kpis } from "@/../mocks/modals/storyboardModalMockData";

const StoryboardModal = () => {
  const [isAccessRequested, setIsAccessRequested] = useState(false);

  return (
    <AssetModal
      title="Storyboard"
      type="Storyboard"
      description="A storyboard is a graphic organizer that consists of illustrations or images displayed in sequence for the purpose of pre-visualizing a motion picture, animation, motion graphic or interactive media sequence."
      tags={["storyboard", "sequence"]}
    >
      <Metrics metricsData={kpis} />
      <div className="flex flex-col gap-2">
        <Typography variant="h5">Affiliate Applicability</Typography>
        <Typography variant="body1">
          In exploring the realm of affiliate applicability, we&apos;ve
          harnessed the power of strategic partnerships to redefine market
          dynamics. Leveraging our expertise, we&apos;ve seamlessly integrated
          products ranging from cutting-edge tech innovations to timeless
          lifestyle essentials. By forging symbiotic relationships with industry
          leaders, we&apos;ve curated a curated selection that resonates with
          diverse consumer demographics. Our affiliate network thrives on mutual
          trust and shared prosperity, facilitating a seamless exchange of value
          that propels brands to new heights while empowering affiliates with
          lucrative opportunities. This collaborative synergy underscores our
          commitment to pioneering excellence in affiliate marketing, where
          every partnership catalyzes growth and innovation in equal measure.
        </Typography>
      </div>
      <IconButton
        className="flex h-12 w-full shrink-0 justify-center bg-slate-800 text-white hover:bg-slate-900 disabled:bg-slate-300"
        icon={isAccessRequested ? <LockIcon /> : <UnlockIcon />}
        onClick={() => {
          setIsAccessRequested(!isAccessRequested);
        }}
        disabled={isAccessRequested}
      >
        {isAccessRequested ? "Access requested" : "Request access"}
      </IconButton>
    </AssetModal>
  );
};

export default StoryboardModal;
