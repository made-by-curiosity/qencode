import { FC } from "react";
import styles from "./SecondaryButton.module.css";
import { BaseButton } from "../BaseButton";
import { IBaseButtonProps } from "../BaseButton/types";

export const SecondaryButton: FC<IBaseButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <BaseButton
      className={`${styles.secondaryButton} ${className || ""}`}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
