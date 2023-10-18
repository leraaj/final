import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
