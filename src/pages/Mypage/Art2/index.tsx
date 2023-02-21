import React from 'react'
import aa from './aa.png'
import * as S from './style'

function Index() {
  return (
    <S.Container>
    <div className="container">
        <div className="white-bg">
            <img src={aa} className="aa"/>
        <div className="w-title">ART N GUIDE</div>
        <div className='w-title2'> BY THE NUMBERS</div>
        <div className='w-content'>
            <div className='w-one'>
                <div className='w-n'>118</div>
                <div className='w-l'></div>
                <div className='w-t'>총 공동구매 횟수</div>
            </div>
            <div className='w-two'>
                <div className='w-n2'>24,802,600,000원</div>
                <div className='w-l2'/>
                <div className='w-t2'>총 공동구매 금액</div>
            </div>
            <div className='w-three'>
                <div className='w-n3'>33.8%</div>
                <div className='w-l3'/>
                <div className='w-t3'>평균 수익률</div>
            </div>
        </div>
        <div className='w-content2'>
            <div className='w-one2'>
                <div className='w-n21'>71</div>
                <div className='w-l21'/>
                <div className='w-t21'>총 매각 작품수</div>
            </div>
            <div className='w-two2'>
                <div className='w-n22'>10,430,750,000원</div>
                <div className='w-l22'/>
                <div className='w-t22'>총 매각 금액</div>
                </div>
                <div className='w-three2'>
                    <div className='w-n23'>143%</div>
                    <div className='w-l23'/>
                    <div className='w-t23'>평균 기간환산 수익률(연)</div>
                </div>
        </div>
        </div>
    </div>
    </S.Container>
  )
}

export default Index