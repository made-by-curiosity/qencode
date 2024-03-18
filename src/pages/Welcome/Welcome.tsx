import { useNavigate } from "react-router-dom";
import { routes } from "src/config/routes";
import styles from "./Welcome.module.css";
import { Container } from "src/components/Container";
import { Section } from "src/components/Section";
import { MainButton } from "src/components/MainButton";

export const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(routes.login);
  };

  return (
    <Container>
      <Section title="Welcome!">
        <MainButton className={styles.loginBtn} onClick={handleNavigate}>
          Login
        </MainButton>
      </Section>
    </Container>
  );
};
