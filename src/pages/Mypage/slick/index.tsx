import Slicom from 'containers/Slicom';
import React, { useRef } from 'react'
import Slider from 'react-slick';

import next from './next.png'
import s from './s.png'
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
          };
          function gotoNext() {
            customSlider.current.slickNext();
          }
        
          const gotoPrev = () => {
            customSlider.current.slickPrev();
          };
  return (
    <S.Container>
    <div className="slick">
    <button className="btn-prev" onClick={() => gotoPrev()}>
      <img src={next} alt="img prev" />
    </button>
    <button className="btn-next" onClick={() => gotoNext()}>
      <img src={s} alt="img next" />
    </button>
   <Slider {...settings}  ref={customSlider}>
    <div>
      <Slicom/>
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