import { FC, ReactNode } from "react";
import styles from "./Container.module.css";

export interface IContainerProps {
  children: ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
