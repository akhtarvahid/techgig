import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ authed, children }) {
  return authed ? <>{children}</> : <Navigate to="/404" />;
}
export default PrivateRoute;
