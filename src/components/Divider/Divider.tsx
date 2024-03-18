import { FC } from "react";
import styles from "./Divider.module.css";
import { IDividerProps } from "./types";

export const Divider: FC<IDividerProps> = ({ text, className }) => {
  return <div className={`${styles.divider} ${className || ""}`}>{text}</div>;
};
