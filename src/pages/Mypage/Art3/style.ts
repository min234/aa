import styled from "styled-components";

export const Container = styled.div`
.g-bg{
    width: 1920px;
  height: 404px;

  padding: 77px 723px 67px 663px;
  background-color: #5c7161;
  @media (max-width: 1600px) {
    padding: 76px 708px 67px 554px;
  }
  @media (max-width: 1366px) {
    padding: 76px 708px 67px 444px;
  }
 @media (max-width: 1280px) {
  padding: 76px 708px 67px 385px;
 }
@media (max-width: 1024px) {
  padding: 76px 234px 67px 234px;
}
@media (max-width: 768px) {
  padding: 76px 0px 59px 126px;
}
@media (max-width: 540px) {
  padding: 56px 109px 42px;
}
}
.g-title{
    width: 551px;
  height: 56px;
  font-family: DMSerifDisplay;
  font-size: 41px;
  line-height: 1.37;
  letter-spacing: 2.05px;
  text-align: left;
  color: #fff;
  @media (max-width: 768px) {
    width: 318px;
    height: 33px;
    margin: 0 101px;
    font-family: DMSerifDisplay;
    font-size: 24px;
    line-height: 1.38;
    letter-spacing: 1.2px;
    text-align: left;
    color: #fff;
  }
  @media (max-width: 540px) {
  margin-left: 11px;
}
}
.g-k-title{
    width: 509px;
  height: 47px;
  margin: 0px 11px 30px 12px;
  font-family: Montserrat;
  font-size: 35px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: -2.45px;
  text-align: left;
  color: #fff;
  @media (max-width: 768px) {
    width: 339px;
    height: 30px;
    margin: 0px 0px 14px 91px;
    font-family: Montserrat;
    font-size: 23px;
    font-weight: 500;
    line-height: 1.23;
    letter-spacing: -1.54px;
    text-align: left;
    color: #fff;
  }
  @media (max-width: 540px) {
    margin: 0px 0px 14px 3px;
}
}
.g-content{
    width: 534px;
  height: 62px;
  margin: 30px 0 34px;
  font-family: Montserrat;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -1.61px;
  text-align: center;
  color: #fff;
@media (max-width: 768px) {
  display: none;
}

}
.gg{
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 369px;
    height: 69px;
    margin: 15px 75px 20px;
    font-family: Montserrat;
    font-size: 23px;
    line-height: 1.18;
    letter-spacing: -1.19px;
    text-align: center;
    color: #fff;
  }
  @media (max-width: 540px) {
    width: 322px;
  height: 69px;
  margin: 0px;
  font-family: Montserrat;
  font-size: 17px;
  line-height: 1.18;
  letter-spacing: -1.19px;
  text-align: center;
  color: #fff;
}
}
.read-more{
    width: 122px;
  height: 35px;
  margin: 34px 206px 0;
  padding: 7px 18px 8px 19px;
  border-radius: 3px;
  background-color: #fff;
  text-align: left;
  color: #5d7160;
  font-size: 17px;
  line-height: 1.18;
  @media (max-width: 540px) {
    margin: 34px 100px 0;
}
}
`