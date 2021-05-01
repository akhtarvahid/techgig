import { LOGIN, LOGOUT } from "./types";

const loginId = "foo";
const loginPassword = "bar"
export const loginUser = (item, props) => {
  let isLoggedIn = false;
  if(item.username === loginId && item.password === loginPassword) {
    localStorage.setItem('active', true)
    isLoggedIn = true;
    props.history.push('/home')
}
  return {
    type: LOGIN,
    payload: isLoggedIn
  };
};
export const logoutUser = (history) => {
  localStorage.removeItem('active');
  history.push('/')
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
