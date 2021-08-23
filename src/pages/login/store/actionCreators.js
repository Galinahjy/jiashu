import axios from "axios";
import { LOGOUT, TOGGLE_LOGIN_STATUS } from "./actionTypes";

const toggleLoginStatus = () => ({
  type: TOGGLE_LOGIN_STATUS,
  value: true,
});

export const logout = () => ({
  type: LOGOUT,
  value: false,
});

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          dispatch(toggleLoginStatus());
        } else {
          alert("登陆失败");
        }
      })
      .catch((err) => console.log(err));
  };
};
