import styles from "./Login.module.css";
import { Container } from "src/components/Container";
import { Section } from "src/components/Section";
import GoogleIcon from "src/assets/svg/google.svg?react";
import GithubIcon from "src/assets/svg/github.svg?react";
import { SecondaryButton } from "src/components/SecondaryButton";
import { Divider } from "src/components/Divider";
import { LoginForm } from "./components/LoginForm";

export const Login = () => {
  return (
    <Container>
      <Section title="Log in to your account">
        <div className={styles.contentWrapper}>
          <div className={styles.socialBtnsWrapper}>
            <SecondaryButton>
              <GoogleIcon />
              Google
            </SecondaryButton>
            <SecondaryButton>
              <GithubIcon />
              GitHub
            </SecondaryButton>
          </div>
          <Divider text="or" className={styles.loginDivider} />
          <LoginForm />
        </div>
      </Section>
    </Container>
  );
};
