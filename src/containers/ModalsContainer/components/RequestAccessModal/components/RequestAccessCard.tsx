import { useCallback, useState } from "react";
import cn from "classnames";
import { Card } from "@/components";
import {
  Layout as LayoutIcon,
  Unlock as UnlockIcon,
  Lock as LockIcon,
} from "react-feather";

import { type Layout } from "@/global/types";

type RequestAccessCardProps = Layout;

const RequestAccessCard = ({
  id,
  name,
  description,
  amountOfPages,
}: RequestAccessCardProps) => {
  const [isRequesting, setIsRequesting] = useState(false);

  const handleRequestAccess = useCallback(() => {
    setIsRequesting(true);
  }, []);

  return (
    <Card
      title={name}
      description={description}
      icon={LayoutIcon}
      key={id}
      className="relative"
      onClick={handleRequestAccess}
    >
      <div className="font-semibold text-slate-400">
        Amount of pages: {amountOfPages}
      </div>
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white bg-opacity-80 transition-opacity duration-500",
          {
            hidden: isRequesting,
          },
        )}
      >
        {isRequesting ? (
          <LockIcon size={40} className="text-slate-400" />
        ) : (
          <UnlockIcon size={40} className="text-slate-400" />
        )}
      </div>
      {/*{isRequesting ? (*/}
      {/*  <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white bg-opacity-90">*/}
      {/*    <UnlockIcon size={40} className="text-slate-400" />*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white bg-opacity-90">*/}
      {/*    <LockIcon size={40} className="text-slate-400" />*/}
      {/*  </div>*/}
      {/*)}*/}
    </Card>
  );
};

export default RequestAccessCard;
