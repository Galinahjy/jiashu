import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../login/store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { Redirect } from "react-router-dom";
class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => (this.account = input)} />
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => (this.password = input)}
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to={"/"} />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(["login", "login"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login(accountEle, passwordEle) {
      //   console.log(accountEle.value, passwordEle.value);
      dispatch(actionCreators.login(accountEle.value, passwordEle.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
