import { MouseEvent, useState } from "react";
import styles from "./LoginForm.module.css";
import { routes } from "src/config/routes";
import { MainButton } from "src/components/MainButton";
import { MainLink } from "src/components/MainLink";

export const LoginForm = () => {
  const [isPasswordView, setIsPasswordView] = useState(true);

  const handleLoginClick = (e: MouseEvent) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <div>
      <form>
        <div className={styles.inputsWrapper}>
          <input type="text" placeholder="Work email" />
          {isPasswordView && (
            <>
              <input type="text" placeholder="Password" />
              <MainLink path={routes.forgot} className={styles.forgotLink}>
                Forgot your password?
              </MainLink>
            </>
          )}
        </div>
        <MainButton
          className={styles.loginBtn}
          type={isPasswordView ? "submit" : "button"}
          onClick={handleLoginClick}
        >
          Log in to Qencode
        </MainButton>
      </form>
      <p className={styles.text}>
        Is your company new to Qencode?{" "}
        <MainLink path={routes.root}>Sign up</MainLink>
      </p>
    </div>
  );
};
