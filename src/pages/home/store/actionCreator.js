import {
  ADD_LIST_ITEM,
  CHANGE_HOME_DATA,
  TOGGLE_SCROLL_TOP,
} from "./actionType";
import axios from "axios";
import { fromJS } from "immutable";

const getChangeHomeDataAction = (data) => ({
  type: CHANGE_HOME_DATA,
  topicList: data.topicList,
  recommendList: data.recommendList,
  articleList: data.articleList,
  writerList: data.writerList,
});

const addListItem = (list, nextPage) => ({
  type: ADD_LIST_ITEM,
  list: fromJS(list),
  nextPage: nextPage,
});

export const getHomeData = () => {
  return (dispatch) => {
    axios
      .get("/api/home.json")
      .then((res) => {
        const data = res.data;
        dispatch(getChangeHomeDataAction(data.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getMoreListItem = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      const data = res.data.data;
      dispatch(addListItem(data, page + 1));
    });
  };
};

export const toggleShowScrollTop = (flag) => ({
  type: TOGGLE_SCROLL_TOP,
  flag,
});
