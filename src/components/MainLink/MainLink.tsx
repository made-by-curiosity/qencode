import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./MainLink.module.css";
import { IMainLinkProps } from "./types";

export const MainLink: FC<IMainLinkProps> = ({
  path,
  children,
  className,
  ...rest
}) => {
  return (
    <Link to={path} className={`${styles.link} ${className || ""}`} {...rest}>
      {children}
    </Link>
  );
};
