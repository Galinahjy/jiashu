import { fromJS } from "immutable";
import { CHANGE_DETAIL } from "./actionTypes";

const defaultState = fromJS({
  title: "",
  content: "",
});

const changeDetail = (state, action) => {
  return state.merge({
    title: action.title,
    content: action.content,
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      return changeDetail(state, action);
    default:
      return state;
  }
};
