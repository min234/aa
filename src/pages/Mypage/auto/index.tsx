import React from 'react'
import Slider from 'react-slick';
import * as S from './style'

function Index() {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <S.Container>
       
       <div className="bb2">
        <Slider {...settings}>
            <div className='fl' >
            <div className="no"><div className='ci' ></div>[NOTICE] 5월 공동구매 스케쥴 변경 안내</div>
            </div>
            <div className='fl' >
            <div className="no1"><div className='ci2' ></div>[공지사항] 5월 공동구매 스케쥴 변경 안내</div>
            </div>
            <div className='fl' >
            <div className="no2"><div className='ci3' ></div>[UPDATE]  2022년 아트앤가이드 웹사이트 리뉴얼 관련</div>
            </div>
            <div className='fl' >
            <div className="no3"><div className='ci4' ></div>[NOTICE] 5월 공동구매 스케쥴 변경 안내</div>
            </div>
            <div className='fl' >
            <div className="no4"><div className='ci5' ></div>[공지사항] 5월 공동구매 스케쥴 변경 안내</div>
            </div>
            <div className='fl' >
            <div className="no5"><div className='ci6' ></div>[UPDATE]  2022년 아트앤가이드 웹사이트 리뉴얼 관련</div>
            </div>
          </Slider>
        </div>
    
    </S.Container>
  )
}

export default Index