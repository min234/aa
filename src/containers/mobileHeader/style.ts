import styled from "styled-components";

export const Container = styled.div`
.bgz {
    position: fixed;
    z-index: 1;
    display: flex;
    width: 768px;
  height: 90px;
  padding: 35px 15px 35px 264px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  @media (max-width: 540px) {
    width: 540px;
  height: 90px;
  padding: 35px 15px 35px 179px;
  }
}
.title{
    width: 182.7px;
    height: 44px;
    object-fit: contain;
    font-size: 29px;
    margin-top: -10px;
}
.anticon{
   
    margin: 10px 0 0 269.3px;
    width: 20px;
    height: 20px;
    font-family: themify;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #5c7161;
    @media (max-width: 540px) {
    margin: 10px 0 0 137.3px;
  }
}
.show-menu{
    width: 543px;
    height: 793px;
    position: fixed;
    z-index: 1;
    margin-top: 55px;
    background-color: #fff;
    left: 0px;
    -webkit-transition: 1s;
    transition: 1s;
}

.hide-menu{
width: 543px;
height: 500px;
position: absolute;
left: -560px;
transition: 1s;
}
.Anna{
  width: 540px;
  height: 44px;
  padding: 10px 416px 9px 15px;
  background-color: #f0f1e4;
  font-size: 16px;
  margin-left: -40px;
  font-weight: 500;
  text-align: right;
  color: #5d7160;
}
.a{
  width: 112px;
  height: 21px;
  margin: 43px 218px 30px 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
}
.b{
  width: 61px;
  height: 21px;
  margin: 0px 269px 30px 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
}
.c{
  width: 61px;
  height: 21px;
  margin: 0px 269px 30px 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
}
.d{
  width: 76px;
  height: 21px;
  margin: 0px 254px 30px 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
}
.e{
  width: 146px;
  height: 19px;
  margin: 0px 184px 366px 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.29px;
  text-align: left;
  color: #5d7160;
}
.logout{
  display: none;
}
.logout.active{
  display: block;
  width: 524px;
  height: 48px;
  margin: 0px -21px 65px;
  padding: 15px 228px 14px 229px;
  border: solid 1px #5c7161;
  background-color: #fff;  
  text-align: center;
  color: #5d7160;
  font-size: 16px;
  font-weight: 500;
}
.login{
  width: 510px;
  height: 48px;
  margin: 0px -21px 65px;
  padding: 15px 228px 14px 229px;
  border: solid 1px #5c7161;
  background-color: #fff;  
  text-align: center;
  color: #5d7160;
  font-size: 16px;
  font-weight: 500;
  display: block;
}
.login.active{
  display: none;
}
`