import { LOGIN_ID, LOGIN_PASS } from "./constant";
import { LOGIN, LOGOUT } from "./types";

export const loginUser = (item, navigate) => {
  let isLoggedIn = false;

  if (item.username === LOGIN_ID && item.password === LOGIN_PASS) {
    localStorage.setItem("active", true);
    isLoggedIn = true;
    navigate("/home");
  }
  return {
    type: LOGIN,
    payload: isLoggedIn,
  };
};
export const logoutUser = (history) => {
  localStorage.removeItem("active");
  history("/");
  return {
    type: LOGOUT,
    payload: false,
  };
};
export const isLoggedIn = () => {
  return {
    type: "IS_LOGGED_IN",
  };
};
