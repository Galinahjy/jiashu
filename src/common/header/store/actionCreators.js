import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";
const getChangeListAction = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const getSearchInputFocusedAction = () => ({
  type: constants.SEARCH_INPUT_FOCUSED,
});

export const getMouseEnterAction = () => ({
  type: constants.MOUSE_ENTER,
});

export const getMouseLeaveAction = () => ({
  type: constants.MOUSE_LEAVE,
});

export const getChangePageAction = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        dispatch(getChangeListAction(data.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getSearchInputBlurAction = () => ({
  type: constants.SEARCH_INPUT_BLUR,
});
