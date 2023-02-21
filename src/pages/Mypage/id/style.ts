import styled from "styled-components";

export const Container = styled.div`
.modal{
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    outline: none;
    margin-left: -1449px;
    margin-top: -750px;
    width: 1920px;
    height: 1418px;
    padding: 112px 756px 855px;
}
.id-bg{
    width: 408px;
  height: 525px;
  margin: 0 281px 93px 0;
  padding: 57px 36px 48px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
}
.id-bg.active{
    display: none;
}
.id{
    width: 100px;
  height: 25px;
  margin: 0 0px 10px 39px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 0.45px;
  text-align: left;
  color: #5d7160;
 
}
.id.active{  
    font-weight: 600;
}

.password{
    width: 118px;
  height: 25px;
  margin: 0 21px 10px 57px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 0.45px;
  text-align: left;
  color: #5d7160;
}
.password.active{  
    font-weight: 600;
}
.one{
    display: flex;
}
.two{
    display: none;
}
.two.active{
    display: block;
    display: flex;
    flex-direction: column;
}
.three{
    display: none;
}
.three.active{
    display: block;
    display: flex;
    flex-direction: column;
}
.email{
    width: 50px;
  height: 21px;
  margin : 12px 279px 10px 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 0.4px;
  text-align: left;
  color: #5d7160;
}
.e{
    width: 328px;
  height: 50px;
  margin: 10px 0 0;
  border: solid 1px #c6cdc7;
  background-color: #fff;
}
.ok{
    width: 328px;
  height: 45px;
  margin: 35px 0px 60px;
  padding: 12px 28px;
  background-color: #5d7160;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.id2{
    width: 52px;
  height: 21px;
  margin: 12px 279px 10px 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 0.4px;
  text-align: left;
  color: #5d7160;
}
.text{
    width: 336px;
  height: 19px;
  margin: 60px 0 0;
  font-family: NotoSansKR;
  font-size: 13px;
  line-height: 7.69;
  letter-spacing: normal;
  text-align: center;
  color: #bcbcbc;
}
.id2-bg{
    width: 408px;
  height: 280px;
  margin: 0 281px 333px 0;
  padding: 53px 40px 60px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
}
.t2{
    width: 328px;
  height: 85px;
  margin: 7px 0 30px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: 0.5px;
  text-align: center;
  color: #5d7160;
}
.oki{
    width: 155px;
  height: 45px;
  margin: 30px 86px 0 87px;
  padding: 12px 45px 12px 44px;
  background-color: #5d7160;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.next{
    display: none;
}
.next.active{
    display: block;
}
`