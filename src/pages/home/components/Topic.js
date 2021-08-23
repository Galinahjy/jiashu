import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem, TopicMore } from "../style";
import { connect } from "react-redux";
class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <div>
        <TopicWrapper>
          {topicList.map((item) => (
            <TopicItem key={item.get("id")}>
              <img className="topic-pic" src={item.get("imgUrl")} alt="" />
              {item.get("title")}
            </TopicItem>
          ))}

          <TopicMore>查看更多</TopicMore>
        </TopicWrapper>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(["home", "topicList"]),
  };
};

export default connect(mapStateToProps, null)(Topic);
