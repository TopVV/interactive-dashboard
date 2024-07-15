import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

const Tag = ({ children }: TagProps) => {
  return (
    <div className="rounded border-2 border-slate-300 bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
      #{children}
    </div>
  );
};

export default Tag;
