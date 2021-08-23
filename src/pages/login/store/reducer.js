import { fromJS } from "immutable";
import { LOGOUT, TOGGLE_LOGIN_STATUS } from "./actionTypes";

const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_STATUS:
      return state.set("login", action.value);
    case LOGOUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};
