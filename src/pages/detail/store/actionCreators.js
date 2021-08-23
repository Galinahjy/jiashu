import axios from "axios";
import { CHANGE_DETAIL } from "./actionTypes";
import { fromJS } from "immutable";

const changeDetail = (data) => ({
  type: CHANGE_DETAIL,
  title: fromJS(data.title),
  content: fromJS(data.content),
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios
      .get("/api/detail.json?id=" + id)
      .then((res) => {
        const data = res.data.data;
        dispatch(changeDetail(data));
      })
      .catch((err) => console.log(err));
  };
};
