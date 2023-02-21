import styled from "styled-components";

export const Container = styled.div`
.modal{
  position: fixed; 
  z-index: 4; 
  left: 0;
  top: 0;
  padding: 140px 783px 1460px 783px;
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}
.white-modal{
    width: 408px;
    height: 244px;
  padding: 60px 30px 64px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
}
.tt{
    width: 328px;
  height: 59px;
  margin: 0 0 30px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.5px;
  text-align: center;
  color: #5d7160;
}
.cl{
    width: 328px;
    height: 45px;
    margin: 30px 0 0;
    padding: 12px 28px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background-color: #5d7160;
}
`