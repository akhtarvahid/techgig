import {
  LOGIN, LOGOUT
} from "../actions/types";
let initialState = {
  isLoggedIn: localStorage.getItem('active') || false, 
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    default:
      return state;
  }
}
