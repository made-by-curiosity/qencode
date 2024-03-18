import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { routes } from "src/config/routes";

export const Layout = () => {
  return (
    <div>
      <NavLink to={routes.root}>Welcome Page</NavLink>
      <NavLink to={routes.login}>Login</NavLink>
      <NavLink to={routes.forgot}>Forgot Password?</NavLink>
      <NavLink to={routes.reset}>Reset Password</NavLink>
      <NavLink to={routes.dashboard}>Dashboard</NavLink>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
