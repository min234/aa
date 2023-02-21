import styled from "styled-components";

export const Container = styled.div`
.seperator{
    display: flex;
    width: 1920px;
  height: 599px;
  margin: 0px 0 123px;
  padding: 0 0 0 313px;
  background-color: #f0f1e4;
  @media (max-width: 1600px) {
    padding: 0 0 0 38px;
  }
  @media (max-width: 1024px) {
    padding: 0 0 0 0px;
  }
  @media (max-width: 768px) {
    width: 768px;
  height: 599px;
  margin: 0 0 0px;
  padding: 49px 84px 233px 153px;
  background-color: #f0f1e4;
  display :flex ;
  flex-direction: column;
  }
  @media (max-width: 540px) {
    padding: 49px 84px 197px 0px;
  }
}
.title{
    width: 275px;
  height: 56px;
  margin: 106px 396px 12px 0;
  font-family: DMSerifDisplay;
  font-size: 41px;
  line-height: 1.37;
  letter-spacing: 2.05px;
  text-align: left;
  color: #5c7161;
  @media (max-width: 1024px) {
    margin: 106px 0px 12px 0;
    font-size: 28px;
  }
  @media (max-width: 768px) {
    width: 249px;
    height: 49px;
    margin: 0 289px 14px 1px;
    font-family: DMSerifDisplay;
    font-size: 36px;
    line-height: 1.36;
    letter-spacing: 1.8px;
    text-align: left;
    color: #5c7161;
    font-size: 36px;
  }
}
.content{
    width: 569px;
  height: 86px;
  margin: 12px 81px 20px 0;
  font-family: Montserrat;
  font-size: 32px;
  line-height: 1.22;
  letter-spacing: -2.24px;
  text-align: left;
  color: #5c7161;
  @media (max-width: 1024px) {
    margin: 7px 0px 11px 0;
    font-size: 28px;
  }
  @media (max-width: 768px) {
    width: 510px;
  height: 64px;
  margin: 14px 2px 24px 1px;
  font-family: Montserrat;
  font-size: 24px;
  line-height: 1.21;
  letter-spacing: -1.68px;
  }
}
.s-content{
    width: 550px;
  height: 176px;
  margin: 20px 100px 1px 0;
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.21;
  letter-spacing: -1.33px;
  text-align: left;
  color: #5c7161;
  @media (max-width: 1024px) {
    margin: 18px 0px 0px 0;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    width: 513px;
  height: 143px;
  margin: 24px 0 29px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.19;
  letter-spacing: -1.12px;
  }
}
.read{
    width: 122px;
  height: 35px;
  margin: 1px 528px 107px 0;
  padding: 7px 18px 8px 19px;
  border-radius: 3px;
  background-color: #607664;
  text-align: left;
  color: #e8e9da;
  line-height: 1.18;
  font-size: 17px;
  @media (max-width: 1024px) {
    margin: 1px 444px 107px 0;
  }
}
.mask{
   
    @media (max-width: 1600px) {
        width: 890px;
    height: 596px;
    }
    @media (max-width: 1366px) {
        width: 662px;
    }
    @media (max-width: 1280px) {
      width: 571px;
    }
    @media (max-width: 1024px) {
      width: 455px;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
`