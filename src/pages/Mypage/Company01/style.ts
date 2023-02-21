import styled from 'styled-components'

export const Container = styled.div`
.bg{
    width: 1920px;
  height: 424px;
  padding: 75px 324px 59px 299px;
  background-color: #9bb29f;
  display: flex;
  color: #f2f2f2;
    @media (max-width: 1600px) {
      padding: 75px 324px 59px 238px;
    }
    @media (max-width: 1366px) {
    width: 1366px;
    padding: 75px 324px 59px 97px;
    }
    @media (max-width: 1280px) {
        padding: 75px 316px 59px 11px;
    }
    @media (max-width: 1024px) {
    width: 1284px;
    }
    @media (max-width: 768px) {
      width: 768px;
    height: 893px;
    padding: 60px 146px 68px 93px;
    background-color: #9bb29f;
    flex-direction: column;
    }
}
.name{
    display: flex;
    flex-direction: column;
    width: 111px;
  height: 25px;
  margin: 0 403px 19px 0;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.63px;
  text-align: left;
  color: #fff;
  @media (max-width: 1024px) {
    margin: 0 348px 19px 0;
    }
}
.name2{
    width: 120px;
  height: 25px;
  margin: 0 354px 19px 1px;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.63px;
  text-align: left;
  color: #fff;
  @media (max-width: 1024px) {
    margin: 0px 183px 19px 1px;
    }
}
.name3{
    width: 102px;
  height: 25px;
  margin: 0 71px 22px 0;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.63px;
  text-align: left;
  color: #fff;

}
.owner,.address2,.dPrma,.dlqrma{
  margin: 9px 0px 9px 0px;
}
.site{
  margin: 43px 0px 9px 0px;
}
.e{
  margin: 12px 0px 26px 0px;
}
.hours{
  margin-bottom: 12px;
}
.time{
  width: 313px;
  @media (max-width: 1024px) {
   width: 250px;
    }
}
`