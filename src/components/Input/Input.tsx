import { forwardRef, InputHTMLAttributes, ReactNode, Ref } from "react";
import cn from "classnames";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  className?: string;
};

const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const {
    className: customClassName,
    startAdornment,
    endAdornment,
    ...restProps
  } = props;

  return (
    <div className={cn("relative h-10 w-full rounded-lg", customClassName)}>
      {startAdornment && (
        <div className="absolute inset-y-0 left-4 flex items-center">
          {startAdornment}
        </div>
      )}
      <input
        className={cn(
          "h-full w-full rounded-lg border-2 border-slate-300 bg-white text-gray-950 focus:border-slate-400 focus:outline-none",
          {
            "pl-12": startAdornment,
          },
        )}
        ref={ref}
        {...restProps}
      />
      {endAdornment && (
        <div className="absolute inset-y-0 right-4 flex items-center">
          {endAdornment}
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
