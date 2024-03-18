import { FC, ReactNode } from "react";
import styles from "./BaseButton.module.css";

export interface IBaseButtonProps {
  children: ReactNode;
}

export const BaseButton: FC<IBaseButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
