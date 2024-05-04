import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { EMPTY_MSG, WRONG_INFO } from "../common/constants";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    message: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.credential);
  console.log("status", status);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.username === "" || state.password === "") {
      setState((prevState) => ({
        ...prevState,
        message: EMPTY_MSG,
      }));
    } else if (state.username !== "foo" || state.password !== "bar") {
      setState((prevState) => ({
        ...prevState,
        message: WRONG_INFO,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        message: "",
      }));
      dispatch(loginUser(state, navigate));
    }
  };

  const { message } = state;
  console.log(state);

  return (
    <>
      <div className="login-form">
        <div className="form-section">
          {message?.length > 0 && <div className="info">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <input
                type="text"
                name="username"
                placeholder="Enter Username: foo"
                onChange={handleChange}
              />
            </div>
            <div className="fields">
              <input
                type="text"
                name="password"
                placeholder="Enter password: bar"
                onChange={handleChange}
              />
            </div>
            <div className="fields">
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
