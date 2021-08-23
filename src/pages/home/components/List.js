import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
class List extends PureComponent {
  render() {
    const { articleList } = this.props;
    return (
      <div>
        {articleList.map((item, index) => (
          // <Link to={"/detail?id=" + item.get("id")}>
          <Link to={"/detail/" + item.get("id")}>
            <ListItem key={index}>
              <img className="list-pic" src={item.get("imgUrl")} alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="content">{item.get("content")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => this.props.getMoreListItem(this.props.page)}>
          更多文章
        </LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articleListPage"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreListItem(page) {
      dispatch(actionCreators.getMoreListItem(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
