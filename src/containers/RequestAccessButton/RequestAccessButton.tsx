import { IconButton } from "@/components";
import { Package } from "react-feather";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { useCallback } from "react";

const RequestAccessButton = () => {
  const { addRequestAccessSearchParam } = useUpdateSearchParams();

  const onButtonClick = useCallback(() => {
    addRequestAccessSearchParam();
  }, [addRequestAccessSearchParam]);

  return (
    <IconButton
      icon={<Package size={20} />}
      onClick={onButtonClick}
      className="absolute right-4 top-4 bg-slate-500 px-5 py-3 text-white"
    >
      Request
    </IconButton>
  );
};

export default RequestAccessButton;
