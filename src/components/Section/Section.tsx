import { FC } from "react";
import styles from "./Section.module.css";
import { ISectionProps } from "./types";
import { Logo } from "../Logo";

export const Section: FC<ISectionProps> = ({ children, title }) => {
  return (
    <div className={styles.section}>
      <Logo className={styles.logo} />
      {title && <p className={styles.title}>{title}</p>}
      {children}
    </div>
  );
};
