import { FC } from "react";
import { BaseButton } from "../BaseButton";
import styles from "./MainButton.module.css";
import { IBaseButtonProps } from "../BaseButton/types";

export const MainButton: FC<IBaseButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <BaseButton className={`${styles.mainButton} ${className}`} {...rest}>
      {children}
    </BaseButton>
  );
};
