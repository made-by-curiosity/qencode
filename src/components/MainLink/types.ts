import { AnchorHTMLAttributes, ReactNode } from "react";

export interface IMainLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
  children: ReactNode;
  className?: string;
}
