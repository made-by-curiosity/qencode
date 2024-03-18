import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IBaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
