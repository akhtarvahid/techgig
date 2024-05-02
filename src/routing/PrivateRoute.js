import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ authed, children }) {
  console.log('authed:::',authed)
  return authed ? <>{children}</> : <Navigate to="/" />;
}
export default PrivateRoute;
