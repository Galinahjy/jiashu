import React, { PureComponent } from "react";
import {
  WriterWrapper,
  OwnerChatCode,
  WriterTitle,
  WriterSwitch,
  WriterItem,
  WriterItemInfo,
  WriterFavor,
} from "../style";
import { connect } from "react-redux";

class Writer extends PureComponent {
  render() {
    const { writerList } = this.props;
    return (
      <div>
        <OwnerChatCode>
          <img
            className="owner-code-pic"
            src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-bef8a3919bdba9e8d965956b37291e98.png"
            alt=""
          />
          <div className="content">
            <h3 className="title">扫描官方公众号</h3>
            <p className="desc">随时随地发现和创作内容</p>
          </div>
        </OwnerChatCode>
        <WriterWrapper>
          <WriterTitle>
            推荐作者
            <WriterSwitch>
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe6e1;
              </span>
              换一批
            </WriterSwitch>
          </WriterTitle>
          {writerList.map((item) => (
            <WriterItem key={item.get("id")}>
              <img className="writer-pic" alt="" src={item.get("imgUrl")} />
              <WriterItemInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </WriterItemInfo>
              <WriterFavor>+关注</WriterFavor>
            </WriterItem>
          ))}
        </WriterWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    writerList: state.getIn(["home", "writerList"]),
  };
};

export default connect(mapStateToProps, null)(Writer);
