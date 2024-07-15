import { ReactNode } from "react";
import cn from "classnames";

/* Typography - simple text component that allows to use different variants */

type TypographyProps = {
  children: ReactNode;
  variant: "h1" | "h2" | "h4" | "h5" | "body1" | "subtitle1" | "subtitle2";
  className?: string;
};

const variantsClassNamesMap: Record<
  TypographyProps["variant"],
  { className: string; Component: keyof HTMLElementTagNameMap }
> = {
  h1: { className: "text-5xl font-extrabold", Component: "h1" },
  h2: { className: "text-4xl font-bold", Component: "h2" },
  h4: { className: "text-3xl font-bold", Component: "h4" },
  h5: { className: "text-2xl font-bold", Component: "h5" },
  subtitle1: { className: "text-lg font-semibold", Component: "p" },
  subtitle2: {
    className: "text-base font-semibold text-slate-500",
    Component: "p",
  },
  body1: { className: "text-base", Component: "p" },
};

const Typography = ({
  children,
  variant = "body1",
  className: customClassName,
}: TypographyProps) => {
  const { className: componentClassName, Component } =
    variantsClassNamesMap[variant];

  return (
    <Component
      className={cn(customClassName, "text-gray-950", componentClassName)}
    >
      {children}
    </Component>
  );
};

export default Typography;
