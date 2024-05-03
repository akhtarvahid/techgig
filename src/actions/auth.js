import { LOGIN, LOGOUT } from "./types";

const loginId = "foo";
const loginPassword = "bar"
export const loginUser = (item, navigate) => {
  let isLoggedIn = false

  if(item.username === loginId && item.password === loginPassword) {
    localStorage.setItem('active', true);
    isLoggedIn = true;
    navigate('/home');
}
  return {
    type: LOGIN,
    payload: isLoggedIn
  };
};
export const logoutUser = (history) => {
  localStorage.removeItem('active');
  history('/')
  return {
    type: LOGOUT,
    payload: false
  };
};
export const isLoggedIn = () => {
  return {
    type: 'IS_LOGGED_IN'
  }
}
