import { FC } from "react";
import styles from "./Logo.module.css";
import LogoIcon from "src/assets/svg/logo.svg?react";

export interface ILogoProps {
  className?: string;
}

export const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <div className={`${styles.logoWrapper} ${className}`}>
      <LogoIcon className={styles.icon} />
    </div>
  );
};
