import styled from "styled-components";

export const Container = styled.div`
.sc-title{
    width: 300px;
  height: 115px;
  margin: 50px 380px 23px 305px;
  font-family: DMSerifDisplay;
  font-size: 41px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: left;
  color: #5c7161;
  @media (max-width: 1024px) {
    margin: 50px 380px 23px 135px;
  }
  @media (max-width: 768px) {
    margin: 50px 373px 23px 15px;
  }
}

  
.x{
    margin-left: 311px;
    display: flex;
  gap: 12px;
overflow-x: scroll;
@media (max-width: 1024px) {
  margin-left: 137px;
  }
  @media (max-width: 768px) {
    width: 530px;
    margin-left: 100px;
  }
  @media (max-width: 540px) {
    margin-left: 15px;
  }
}

.item-box{
    width: 617px;
  height: 319px;
  margin: 23px 41px 50px 0px;
  padding: 44px 33.5px 49.5px 0;
  border-radius: 7px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.59);
  background-color: #5a6e5f;
  @media (max-width: 768px) {
    width: 509px;
    height: 319px;
    margin: 19px 16px 23px 0;
    padding: 26px 14px 49.5px 0;
    border-radius: 7px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 59%);
    background-color: #5a6e5f;
  }
}
.item-id{
    display: flex;
}
.sc-id{
    display: flex;
    width: 104px;
  height: 43px;
  margin: 0 16px 45px 0;
  padding: 9px 28px;
  background-color: #fff;
  text-align: left;
  color: #5c7161;
  font-size: 21px;
}
.item-title{
    width: 446px;
  height: 42px;
  margin: 1px 17.5px 45px 16px;
  font-family: Montserrat;
  font-size: 31px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: -1.24px;
  text-align: left;
  color: #fff;
}
.sc-un{
    width: 165px;
  height: 30px;
  margin: 0px 199px 12.5px 29px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;
  color: #fff;
}
.sc-price{
    width: 304px;
  height: 33px;
  margin: 6.5px 60px 10.5px 29px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;
  color: #fff;
}
.all{
    display: flex;
}
.sc-date{
    width: 375px;
  height: 33px;
  margin: 5.5px 0px 6.5px 26px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;
  color: #fff;
}
.sc-a{
    width: 190px;
  height: 33px;
  margin: 5.5px 0.5px 6.5px 0px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: right;
  color: #fff;
}


`