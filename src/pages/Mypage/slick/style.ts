import styled from "styled-components";
export const Container =styled.div`
.slick-arrow{
    z-index: 1; /* prev버튼은 위치 이동시 이미지 뒤로 숨겨짐 */
    position:absolute;  /* 원하는 위치에 지정  */
    top: 50%; 
    width: 80px;
    height: 50px; 
    transform: translateY(-25px);
  object-fit: contain;
  }
  .slick-slider{
    @media (max-width:1600px) {
      width: 1294px;      
    }
    @media (max-width:1280px) {
      width: 1217px;
    }
    @media (max-width:1024px) {
      width: 937px;
    }
  }
  .btn-prev{
    z-index: 1;
    position: absolute;
    margin-top: 318px;
    background-color: #fff;
  }
  .btn-next{
    margin-left: 1245px;
    position: absolute;
    margin-top: 318px;
    z-index: 1;
    background-color: #fff;
    @media (max-width: 1280px) {
      margin-left: 1163px;
    }
    @media (max-width: 1024px) {
      margin-left: 887px;
    }
  }
  .slick-dots li button:before{
 
    content:none;
   
  }
  .slick-dots{
    @media (max-width: 1600px) {
        right: 0px;
    }
  @media (max-width: 1024px) {
    right: -3px;
  }
   
  }
  .slick-active{
    width: 24px;
  height: 11px;
  margin: 0 0px 0 0;
  border-radius: 5px;
  background-color: #fff;
  }
  .slick-dots li.slick-active button:before{
  color: #f0f1e4;
 
  }
  li{
    width: 11px;
  height: 11px;
  border-radius: 5px;
  margin: 0 12px 0 13px;
  background-color: #818e7f;
  }
`
