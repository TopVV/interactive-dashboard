import { X as CloseIcon } from "react-feather";
import { Modal, Typography } from "@/components";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { globalLayoutsDataMock } from "@/../mocks/layoutsDataMock";
import RequestAccessCard from "./components/RequestAccessCard";
import IconButton from "../../../../components/IconButton/IconButton";

const RequestAccessModal = () => {
  const { deleteRequestAccessSearchParam } = useUpdateSearchParams();

  return (
    <Modal>
      <div className="overwflow-y-auto relative flex max-h-[80%] w-[80%] flex-col gap-5 rounded-lg bg-white p-6">
        <div className="absolute right-6 top-2 flex gap-2">
          <IconButton
            icon={<CloseIcon size={20} />}
            onClick={deleteRequestAccessSearchParam}
            className="bg-transparent text-slate-500 hover:text-slate-900"
          />
        </div>
        <Typography variant="h5">Request Access To Layout</Typography>
        <Typography variant="subtitle2">
          Choose a layout to request access to
        </Typography>
        <div className="h-[400px] overflow-hidden rounded-lg border-2 border-dashed border-slate-200">
          <div className="my-6 flex h-[380px] flex-row flex-wrap justify-between gap-6 overflow-y-scroll p-4">
            {globalLayoutsDataMock.map((layoutData) => (
              <RequestAccessCard key={layoutData.id} {...layoutData} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RequestAccessModal;
