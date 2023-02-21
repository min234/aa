import styled from "styled-components";

export const Container = styled.div`
.white-bg{
    width: 1920px;
  height: 599px;
  background-color: white;
  padding: 0px 385px;
  @media (max-width: 1600px) {
    padding: 0px 202px;
  }
  @media (max-width: 1366px) {
    padding: 0px 94px;
  }
 @media (max-width: 1024px) {
  padding: 0px 0px;
 }
@media (max-width: 768px) {
  width: 768px;
  height: 1617px;
}
}
.aa{
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 768px;
    margin-top: -150px;
  }
}
.w-content,.w-content2{
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
}
.w-title{
    width: 282px;
    height: 56px;
    margin: 0 0px 0px 450px;
    font-family: DMSerifDisplay;
    font-size: 41px;
    line-height: 1.37;
    text-align: left;
    color: #5c7161;
    @media (max-width: 1024px) {
      margin: 0 0px 0px 383px;
    }
    @media (max-width: 768px) {
      margin: 73px 0px 0px 270px;
    }
    @media (max-width: 540px) {
      margin: 73px 0px 0px 159px;
    }
}
.w-title2{
    width: 373px;
  height: 56px;
  margin: 0px 240px 58px 389px;
  font-family: DMSerifDisplay;
  font-size: 41px;
  line-height: 1.37;
  letter-spacing: 2.05px;
  text-align: left;
  color: #5c7161;
  @media (max-width: 1024px) {
    margin: 0px 240px 58px 337px;
 }
 @media (max-width: 768px) {
    margin: 0px 240px 58px 213px;
    }
    @media (max-width: 540px) {
      margin: 0px 240px 58px 119px;
    }
}
.w-one{
    margin-right: 234px;
  @media (max-width: 1280px) {
    margin-right: 139px;
  }
  @media (max-width: 768px) {
    margin: auto;
  }
  @media (max-width: 540px) {
      margin-left:195px;
    }
  }
.w-one2{
    margin-right: 268px;
    @media (max-width: 1280px) {
    margin-right: 177px;
  }
  @media (max-width: 768px) {
    margin: auto;
   
  }
  @media (max-width: 540px) {
    margin-left: 204px;
    }
}
.w-three{
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom:35px ;
  }
  @media (max-width: 540px) {
      margin-left:212px;
    }
}
.w-three2{
  @media (max-width: 768px) {
    margin: auto;
  
  }
  @media (max-width: 540px) {
    margin-left: 158px;
    }
}
.w-n{
    width: 64px;
  height: 53px;
  margin: 0 49px 3px 37px;
  font-family: Montserrat;
  font-size: 43px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: 2.15px;
  text-align: center;
  color: #5c7161;
  @media (max-width: 540px) {
    width: 48px;
  height: 39px;
  margin: 0 57px 6px 48px;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 1.6px;
  text-align: center;
  color: #5c7161;
    }
}
.w-l{
    width: 60px;
  height: 4px;
  margin: 3px 51px 15px 47px;
  background-color: #5d7160;
  
}
.w-t{
    width: 158px;
  height: 30px;
  margin: 15px 0 0;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.23;
  letter-spacing: -1.54px;
  text-align: center;
  color: #5c7161;
  
}
.w-two{
    margin-right: 280px;
    @media (max-width: 1024px) {
      margin-right: 147px;
    }
    @media (max-width: 768px) {
    margin: auto;
    margin-top: 35px;
    margin-bottom:25px ;
  }
  @media (max-width: 540px) {
      margin-left:132px;
    }
}
.w-two2{
    margin-right: 250px;
    @media (max-width: 1024px) {
      margin-right: 117px;
    }
    @media (max-width: 768px) {
    margin: auto;
    margin-bottom:35px ;
  }
  @media (max-width: 540px) {
    margin-left: 136px;
    margin-top: 35px;
    }
}
.w-n2{
    width: 387px;
    height: 58px;
    margin: 0px 0px 3px;
    font-family: Montserrat;
    font-size: 50px;
    font-weight: 500;
    line-height: 1.23;
    text-align: center;
    color: #5c7161;
    @media (max-width: 540px) {
      width: 276px;
  height: 43px;
  margin: 0 0 6px;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -0.8px;
  text-align: center;
  color: #5c7161;
    }
}
.w-l2{
    width: 359px;
  height: 4px;
  margin: 3px 9px 14px 4px;
  background-color: #5d7160;
  @media (max-width: 540px) {
    width: 266px;
  margin: 6px 10px 14px 0;
    }
}
.w-t2{
    width: 153px;
  height: 30px;
  margin: 14px 115px 30px 105px;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.23;
  letter-spacing: -1.54px;
  text-align: center;
  color: #5c7161;
  @media (max-width: 540px) {
    width: 152px;
  margin: 14px 67px 0 57px;
    }
}
.w-n3{
    width: 132px;
  height: 53px;
  margin: 0 0 3px;
  font-family: Montserrat;
  font-size: 43px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: 2.15px;
  text-align: center;
  color: #5c7161;
  @media (max-width: 540px) {
    width: 98px;
  height: 39px;
  margin: 0 10px 6px 9px;
  font-family: Montserrat;
  font-size: 32px;
    }
}
.w-l3{
    width: 117px;
  height: 4px;
  margin: 3px 7px 15px 8px;
  background-color: #5d7160;
  @media (max-width: 540px) {
    margin: 6px 0 15px;
    }
}
.w-t3{
    width: 108px;
  height: 30px;
  margin: 15px 10px 0 14px;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.23;
  letter-spacing: -1.54px;
  text-align: center;
  color: #5c7161;
  @media (max-width: 540px) {
  margin: 15px 3px 0 6px;
    }
}
.w-n21{
    width: 44px;
  height: 53px;
  margin: 0 45px 3px 43px;
  font-family: Montserrat;
  font-size: 43px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: 2.15px;
  text-align: center;
  color: #5c7161;
  @media (max-width: 540px) {
    width: 32px;
    height: 39px;
    margin: 0 51px 6px 49px;
    font-size: 32px;
}
}
.w-l21{
    width: 38px;
  height: 4px;
  margin: 3px 47px 15px;
  background-color: #5d7160;
  @media (max-width: 540px) {
    width: 38px;
    height: 4px;
    margin: 6px 47px 15px;
    background-color: #5d7160;
}
}
.w-t21{
    width: 133px;
  height: 30px;
  margin: 15px 0 0;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.23;
  letter-spacing: -1.54px;
  text-align: center;
  color: #5c7161;

}
.w-n22{
    width: 360px;
  height: 58px;
  margin: 0 0 3px;
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: -1.08px;
  text-align: center;
  color: #5c7161;
  @media (max-width: 540px) {
    width: 268px;
    height: 43px;
    margin: 0 0 6px;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.8px;
  }
}
.w-l22{
    width: 337px;
  height: 4px;
  margin: 3px 12px 15px 11px;
  background-color: #5d7160;
  @media (max-width: 540px) {
    width: 257px;
    height: 4px;
    margin: 6px 11px 15px 0;
    background-color: #5d7160;
  }
}
.w-t22{
    width: 112px;
  height: 30px;
  margin: 15px 131px 0 117px;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.23;
  letter-spacing: -1.54px;
  text-align: center;
  color: #5c7161;
  @media (max-width: 540px) {
    margin: 15px 85px 0 71px;
  }
}
.w-n23{
    width: 112px;
  height: 53px;
  margin: 0 60px 3px 58px;
  font-family: Montserrat;
  font-size: 43px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: 2.15px;
  text-align: center;
  color: #5c7161;
  @media (max-width: 540px) {
    width: 82px;
    height: 39px;
    margin: 0 75px 6px 73px;
    font-size: 32px;
    line-height: 1.22;
  }
}
.w-l23{
    width: 97px;
  height: 4px;
  margin: 3px 69px 15px 64px;
  background-color: #5d7160;
  @media (max-width: 540px) {
    margin: 6px 69px 15px 64px;
  }
}
.w-t23{
    width: 230px;
  height: 30px;
  margin: 15px 0 0;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.23;
  letter-spacing: -1.54px;
  text-align: center;
  color: #5c7161;
}
`