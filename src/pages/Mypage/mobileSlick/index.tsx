import MobileSlicom from 'containers/MobileSlicom';
import React, { useRef } from 'react'
import Slider from 'react-slick';
import * as S from './style'

function Index() {
    const customSlider: any = useRef(null);
  
        const settings = {
          dots: true,
          className: "center",
          infinite: true,
          // centerPadding: "60px",
          slidesToShow: 1,
          swipeToSlide: true,
          arrows: false,
          focusOnSelect: true,
          };

  return (
    <S.Container>
        <div className='cantainer'>
           
        <Slider {...settings}  ref={customSlider}>
    <div>
      <MobileSlicom/>
    </div>
    <div className='s'>
     2
    </div>
    <div>
      3
    </div>
    <div>
     4
    </div>
    <div>
    5
    </div>
    <div>
    6
    </div>
  </Slider>
            </div>
      
    </S.Container>
  )
}

export default Index