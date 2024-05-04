import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ isActive, children }) {
  return isActive ? <>{children}</> : <Navigate to="/" />;
}
export default PrivateRoute;
