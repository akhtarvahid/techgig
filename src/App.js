import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import PrivateRoute from "./routing/PrivateRoute";
function App() {
  const { isLoggedIn } = useSelector((state) => state.credential);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute isActive={isLoggedIn}>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
