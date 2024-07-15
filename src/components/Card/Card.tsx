import { ReactNode } from "react";
import { Icon } from "react-feather";
import cn from "classnames";

type CardProps = {
  icon: Icon;
  title: string;
  description: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
};

const Card = ({
  icon,
  title,
  description,
  children,
  onClick = () => {},
  className: customClassName,
}: CardProps) => {
  const Icon = icon;

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex h-36 w-[45%] flex-row items-center gap-4 rounded-lg border-[1px] border-slate-300 bg-white p-3 text-gray-950 hover:cursor-pointer hover:shadow-lg",
        customClassName,
      )}
    >
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-slate-100 p-2">
        <Icon size={60} className="text-slate-400" />
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div className="text-base font-bold">{title}</div>
        <div className="line-clamp-2 font-semibold">{description}</div>
        {children}
      </div>
    </div>
  );
};

export default Card;
