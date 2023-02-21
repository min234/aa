import styled from "styled-components";

export const Container = styled.div`
  .slick-dots li button:before{
 
    content:none;
   
  }
.slick-slider {
    width: 508px;
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