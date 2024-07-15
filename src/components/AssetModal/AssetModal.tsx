import {
  Bookmark as BookmarkIcon,
  Layout as LayoutIcon,
  Link as LinkIcon,
  X as CloseIcon,
} from "react-feather";
import IconButton from "../IconButton/IconButton";
import Modal from "../Modal/Modal";
import Typography from "../Typography/Typography";
import Tag from "../Tag/Tag";
import { useCallback, useEffect, useRef, useState } from "react";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

/* This Modal would have shared header for all assets like close, copy link, title, etc. */

type AssetModalProps = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  children: React.ReactNode;
};

const AssetModal = ({
  title,
  type,
  description,
  tags,
  children,
}: AssetModalProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); // Define modalRef with the correct type

  const { deleteIdSearchParam } = useUpdateSearchParams();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        deleteIdSearchParam();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [deleteIdSearchParam]);

  const onCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
  }, []);

  const sharedIconButtonClasses =
    "bg-transparent text-slate-500 hover:text-slate-900";

  return (
    <Modal>
      <div
        ref={modalRef}
        className="relative flex max-h-full w-[60%] flex-col items-center gap-6 overflow-y-scroll rounded-lg bg-white p-8"
      >
        <div className="absolute right-6 top-2 flex gap-2">
          <IconButton
            icon={<LinkIcon size={16} />}
            onClick={onCopyLink}
            className={sharedIconButtonClasses}
          />
          <IconButton
            icon={<CloseIcon size={20} />}
            onClick={deleteIdSearchParam}
            className={sharedIconButtonClasses}
          />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100">
          <LayoutIcon size={40} className="text-slate-500" />
        </div>
        <div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Typography variant="h2" className="uppercase">
              {title}
            </Typography>
            <div className="rounded bg-slate-100 p-1 text-sm text-slate-400">
              {type}
            </div>
          </div>
          <Typography variant="subtitle2">
            Descriptive name of the {type} asset
          </Typography>
        </div>
        <Typography variant="body1" className="text-center">
          {description}
        </Typography>
        <div className="flex gap-2">
          {tags.map((tag: string) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {children}
        <IconButton
          className="flex h-12 w-full shrink-0 justify-center bg-slate-800 text-white hover:bg-slate-900"
          icon={<BookmarkIcon />}
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? "Remove from favourites" : "Favorite item"}
        </IconButton>
      </div>
    </Modal>
  );
};

export default AssetModal;
