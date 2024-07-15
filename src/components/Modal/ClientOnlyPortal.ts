"use client";

import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef, useState } from "react";

type ClientOnlyPortalProps = {
  children: ReactNode;
  selector: string;
};

const ClientOnlyPortal = ({ children, selector }: ClientOnlyPortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default ClientOnlyPortal;
