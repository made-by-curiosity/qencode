import { FC } from "react";
import styles from "./BaseButton.module.css";
import { IBaseButtonProps } from "./types";

export const BaseButton: FC<IBaseButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};
