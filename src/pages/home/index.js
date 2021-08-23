import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { BackTop } from "./style";
class Home extends PureComponent {
  componentDidMount() {
    this.props.handleGetHomeData();
    this.bandEvents();
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  bandEvents = () => {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              alt=""
              className="banner-img"
              src="//upload-images.jianshu.io/upload_images/20760323-da2764a07b3f92c6.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {this.props.showScroll ? (
            <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
          ) : null}
        </HomeWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(["home", "showScroll"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetHomeData() {
      dispatch(actionCreators.getHomeData());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleShowScrollTop(true));
      } else {
        dispatch(actionCreators.toggleShowScrollTop(false));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
