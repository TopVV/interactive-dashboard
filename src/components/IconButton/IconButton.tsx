import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  onClick: () => void;
  children?: ReactNode;
  className?: string;
};

const IconButton = ({
  icon,
  onClick,
  children,
  className: customClassName,
  ...otherProps
}: IconButtonProps) => (
  <button
    className={cn(
      "flex items-center gap-2 rounded-lg text-sm",
      customClassName,
    )}
    onClick={() => {
      onClick();
    }}
    {...otherProps}
  >
    {icon}
    {children}
  </button>
);

export default IconButton;
