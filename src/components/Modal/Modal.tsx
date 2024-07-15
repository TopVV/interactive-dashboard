"use client";

import { type ReactNode } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";

type ModalProps = {
  children: ReactNode;
};

/* This is general wrapper to modal component - we may want to have reuse this to create different types of Modal Windows */

const Modal = ({ children }: ModalProps) => {
  return (
    <>
      <ClientOnlyPortal selector="#modal">
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {children}
        </div>
      </ClientOnlyPortal>
    </>
  );
};

export default Modal;
