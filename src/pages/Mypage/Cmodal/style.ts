import styled from "styled-components";

export const Container = styled.div`
.modal{
  position: fixed; 
  z-index: 4; 
  left: 0;
  top: 0;
  padding: 140px 756px 1460px 756px;
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}
.white-model{
    width: 408px;
  height: 460px;
  padding: 60px 30px 64px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
}
.modal-title{
    width: 247px;
  height: 27px;
  margin: 0 50px 24.5px 51px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.5px;
  text-align: center;
  color: #5d7160;
}
.scontent{
    width: 348px;
    height: 202px;
    margin: 32px 0 30px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #5c7161;
}
.d12{
    font-weight: 600;
}
.s{
    display: flex;
    width: 400px;
}
.ca{
    width: 155px;
  height: 45px;
  margin: 32px 24px 8px 15px;
  padding: 12px 28px;
  border: solid 1px #5d7160;
  text-align: center;
  color: #5d7160;
  font-size: 16px;
  font-weight: 500;
}
.oo{
    width: 155px;
  height: 45px;
  margin: 30px 10px 0 0px;
  padding: 12px 28px;
  background-color: #5d7160;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
`