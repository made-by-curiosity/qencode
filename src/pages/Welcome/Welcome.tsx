import { Link } from "react-router-dom";
import { routes } from "src/config/routes";
import { Container } from "src/components/Container";
import { Section } from "src/components/Section";
import { BaseButton } from "src/components/BaseButton";

export const Welcome = () => {
  return (
    <Container>
      <Section>
        <Link to={routes.login}>Login</Link>
        <BaseButton>Click</BaseButton>
      </Section>
    </Container>
  );
};
