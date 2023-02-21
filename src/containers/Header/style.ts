import styled from 'styled-components'

export const Wrapper = styled.div`
   .header{
      width: 1920px;
  height: 100px;
display: flex;
  padding: 0.5px 0 38.4px 0.5px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  position: fixed;
  z-index: 4;
   }
   .artnguide{
      width: 182.7px;
  height: 20px;
  margin: 40px 0px 40px 260.5px;
  object-fit: contain;
  font-size: 20px;
  @media (max-width: 1600px) {
   margin: 40px 0px 40px 118.5px;
}
@media (max-width: 1024px) {
   margin: 40px 0px 40px 0px;
}
   }
   .header-main{
      display: flex;
      margin-left:313.3px ;
    
      @media (max-width: 1600px) {
      margin-left: 152.3px;
}
@media (max-width: 1366px) {
   margin-left: 62.3px;
}
@media (max-width: 1024px) {
   margin-left:0px ;
}
   }
   .one{
      width: 112px;
  height: 21px;
  margin: 40px 0px 0 6px;
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
   .one.active{
      font-weight: 600;
   }
   
   .two{
      width: 61px;
  height: 21px;
  margin: 40px 67px 0 63px;
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
   .two.active{
      font-weight: 600;
   }
   .three{
      width: 61px;
  height: 21px;
  margin: 40px 70px 0 67px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
  @media (max-width: 1024px) {
   margin: 40px 0px 0 0px;
  }
   } 
   .three.active{
      font-weight: 600;
   }
   .four{
      width: 146px;
  height: 19px;
  margin: 40px 0 1px 75px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.29px;
  text-align: left;
  color: #5d7160;
   }
   .four.active{
      font-weight: 600;
   }
   .header-last{
      display: flex;
          margin-left: 140px;
          @media (max-width: 1366px) {
            margin-left: 102px;
}
   }
   .login{
      display: block;
      width: 67px;
  height: 21px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  margin-top:40px ;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
   }
   .login.active{
      display: none;
   }
   .logout1{
      display: none;
   }
   .logout1.active{
      display: block;
      height: 107px;
      display: flex;
   }
   .email{
      width: 100px;
  height: 19px;
  margin: 40px 11px 0px 0px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: right;
  color: #5d7160;
   }
   .transform{
      width: 34px;
  height:112px;
  margin: 40px 0px 0 50px;
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
   .dropdown1{
    display:none;
} 
.logout1:hover .dropdown1 {
   display: block;
    min-width: 160px;
    width: 250px;
    height: 113px;
    margin: 15px 117px 323px 85px;
    padding: 27px 143px 28px 31px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 29%);
    background-color: #fff;
    right: 15px;
    padding: 29px 93px 28px 19px;
    box-shadow: rgb(0 0 0 / 29%) 0px 0px 10px 0px;
    background-color: rgb(270,255,255);
    gap: 17px;
    position: absolute;
    z-index: 1;
    top: 74px;
    transition: all 1s cubic-bezier(0.46,0.03,0.52,0.96) 0s;
}
.p{
   width: 25px;
    height: 25px;
    margin: 35px 0px 0 0px;
    object-fit: contain;
}
   .dropdown{
  display: none;
}
.transform:hover .dropdown {
	display: block;
  min-width: 160px;
  right: 15px;
    padding:  29px 93px 28px 19px;
    box-shadow: rgb(0 0 0 / 29%) 0px 0px 10px 0px;
    background-color: rgb(270, 255, 255);
    flex-direction: column;
    gap: 17px;
    position: absolute;
    z-index: 1;
    top: 74px;
    transition: all 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) 0s;
}
.od{
   width: 112px;
}
.drop{
  display: none;
}
 .od:hover .drop{
 display: block;
   z-index: 1;
    position: relative;
   width: 250px;
  height: 150px;
  padding: 29px 151px 30px 19px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.29);
  background-color: #fff;
  text-align: left;
  right: 138px;
  color: #5d7160;
  font-size: 16px;
}
.stikcy{
   width: 64px;
  height: 19px;
  margin: 0 4px 17px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
}
.stikcy.active{
   width: 64px;
  height: 19px;
  margin: 0 4px 17px;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
   font-weight: 600;
}
.demo1{
   width: 64px;
  height: 19px;
  margin: 0 4px 17px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
}
.demo1.active{
   width: 64px;
  height: 19px;
  margin: 0 4px 17px;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: -1.12px;
  text-align: left;
  color: #5d7160;
   font-weight: 600;
}
`