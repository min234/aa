import React from 'react'

import * as S from './style'

function Index() {
  return (
    <S.Container>
        <div className="container">
            <div className="g-bg">
                <div className="g-title">ART N GUIDE USER GUIDE</div>
            <div className="g-k-title">아트앤가이드 공동구매 이용가이드</div>

            <div className="g-content">처음 오신 분들도 간편하게 진행 할 수 있는 아트앤가이드
            공동구매 진행정차레 대해서 더 알아보러 가기!
            </div>
            <div className='gg'>처음 오신 분들도 간편하게 진행<br/>
할 수 있는 아트앤가이드 공동구매 진행절차에 대해서 더 알아보러 가기!</div>
            <button type="button" className='read-more'>read more</button>
            </div>
        </div>
    </S.Container>
  )
}

export default Index