import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const BackTop = styled.div`
  position: fixed;
  font-size: 14px;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  .topic-pic {
    margin-right: 10px;
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }
`;
export const TopicMore = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding: 0 20px;
  font-size: 14px;
  cursor: pointer;
  color: #000;
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    width: 125px;
    border-radius: 10px;
    height: 100px;
    float: right;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  color: #fff;
  border-radius: 20px;
  margin: 30px 0;
  cursor: pointer;
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .content {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;
export const WriterWrapper = styled.div`
  width: 278px;
  order-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

export const WriterTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  text-align: left;
`;

export const WriterSwitch = styled.div`
  cursor: pointer;
  float: right;
  display: inline-block;
  font-size: 14px;
  color: #969696;
  .spin {
    display: block;
    float: left;
    font-size: 4px;
    margin-right: 4px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const OwnerChatCode = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 278px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
  .owner-code-pic {
    width: 60px;
    height: 60px;
    float: left;
  }
  .content {
    float: right;
    margin-top: 10px;
    .title {
      font-size: 15px;
      color: #333;
    }
    .desc {
      margin-top: 7px;
      font-size: 13px;
      color: #999;
    }
  }
`;

export const WriterItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  height: 47px;
  .writer-pic {
    display: block;
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const WriterItemInfo = styled.div`
  width: 150px;
  float: left;
  line-height: 20px;
  .title {
    float: left;
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
  }
  .desc {
    float: left;
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`;

export const WriterFavor = styled.div`
  float: right;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
  line-height: normal;
`;
