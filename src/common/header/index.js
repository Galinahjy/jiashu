import React, { Component } from "react";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Header extends Component {
  getListArea = () => {
    const {
      focused,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      mouseIn,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe6e1;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return;
    }
  };
  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      login,
      handleLogout,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right" onClick={handleLogout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登陆</NavItem>
            </Link>
          )}

          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} classNames="slide" timeout={200}>
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={focused ? "focused iconfont zoom" : "iconfont zoom"}
            >
              &#xe617;
            </span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          {" "}
          <Button className="reg">注册</Button>
          <Link to="/write">
            <Button className="writing">
              <span className="iconfont">&#xe611;</span>写文章
            </Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    // state.get("header").get("focused"),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.getSearchInputFocusedAction());
    },
    handleInputBlur() {
      dispatch(actionCreators.getSearchInputBlurAction());
    },
    handleMouseEnter() {
      dispatch(actionCreators.getMouseEnterAction());
    },
    handleMouseLeave() {
      dispatch(actionCreators.getMouseLeaveAction());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (360 + originAngle) + "deg)";

      if (page < totalPage) {
        dispatch(actionCreators.getChangePageAction(page + 1));
      } else {
        dispatch(actionCreators.getChangePageAction(1));
      }
    },
    handleLogout() {
      console.log("test");
      dispatch(loginActionCreators.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
