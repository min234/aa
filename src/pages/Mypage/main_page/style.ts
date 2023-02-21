import styled from "styled-components";

export const Container = styled.div`

.bg{
    width: 1920px;
  height: 831px;
  padding: 126px 313px 60px;
  background-color: #5c7161;
  
  @media (max-width: 1600px) {
    padding: 87px 167px 60px;
}
  @media (max-width: 1366px) {
    padding: 87px 49px 23px;
}
 @media (max-width: 768px) {
  width: 768px;
  height: 1311px;
  padding: 38px 130px 63px;
  background-color: #5c7161;
 }
 @media (max-width: 768px) {
  padding: 38px 20px 63px;
 }
 @media (max-width: 540px) {
  padding: 104px 20px 63px;
 }
}

`