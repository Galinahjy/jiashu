import { fromJS } from "immutable";
import {
  ADD_LIST_ITEM,
  CHANGE_HOME_DATA,
  TOGGLE_SCROLL_TOP,
} from "./actionType";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articleListPage: 1,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList),
  });
};

const addListItem = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articleListPage: action.nextPage,
  });
};

const toggleScrollTop = (state, action) => {
  return state.set("showScroll", fromJS(action.flag));
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case ADD_LIST_ITEM:
      return addListItem(state, action);
    // state.set("articleList", state.get("articleList").concat(action.list));
    case TOGGLE_SCROLL_TOP:
      return toggleScrollTop(state, action);
    default:
      return state;
  }
};
