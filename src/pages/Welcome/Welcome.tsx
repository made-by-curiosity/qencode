import { Link } from "react-router-dom";
import { routes } from "src/config/routes";

export const Welcome = () => {
  return (
    <div>
      <p>Welcome!</p>
      <Link to={routes.login}>Login</Link>
    </div>
  );
};
