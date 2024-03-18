import { FC, ReactNode } from "react";
import styles from "./Section.module.css";
import Logo from "src/assets/svg/logo.svg?react";

export interface ISectionProps {
  children: ReactNode;
}

export const Section: FC<ISectionProps> = ({ children }) => {
  return (
    <div className={styles.section}>
      <Logo />
      <p>Welcome!</p>
      {children}
    </div>
  );
};
