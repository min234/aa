import React from 'react'
import Mask from './Mask.png'
import * as S from './style'

function Index() {
  return (
    <S.Container>
    <div className="container">
        <div className="seperator">
            <div className="first">
            <div className="title">ART N GUIDE</div>
            <div className='content'>소액으로 다양한 작품을 <br/>소유할 수 있는 미술품 공동구매 플랫폼</div>
            <div className='s-content'>미술과 재테크를 결합한 방식인 미술품 공동구매는 아트앤가이드에서 
            국내 최초로 시도되고 있습니다.
            <br/>
            <br/>
            <br/>
            아트앤가이드는 2018년 10월 국내 최초로 온라인 미술품 공동구매를 
            시작해, 미술품을 재테크로 접근하여 대중의 참여를 유도하고 오프라인 
            중심의 미술시장을 온라인으로의 전환을 주도하고 있습니다.</div>
            <button type="button" className='read'>read more </button>
            </div>
            <div className='seconde'>
            <img src={Mask} className='mask'/>
            </div>
            </div>
    </div>
    </S.Container>
  )
}

export default Index