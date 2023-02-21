import React from 'react'
import pic from './pic.png'
import * as S from './style'

function Index() {
  return (
    <S.Container>
        <div className='bgg'>
            <div className='d'>
            <div className='name'>이우환</div>
            <div className='ename'>Lee Ufan</div>
            <img src= {pic} className="pic"/>
            <div className='text'>Untitled<br/>
79x109cm, oil and pigment on paper, 1977</div>
</div>
<div className='d2'>
    <div className='t'>진행중인 공동구매</div>
   <div className='t-2'>
    <div className='major'>MAJOR</div>
    <div className='lee'>이우환,Untitled</div>
    <div className='day13'>남은기간:13일</div>
   </div>
   <div className='clice'>
    <div className='oh'>100%</div>
    <div className='line'></div>
    <div className='c-t'>공동구매 진행률</div>
   </div>
   <div className='box'>
    <div className='b-t'>공동구매 목표금액 50,000,000원</div>
    <div className='b-l'></div>
    <div className='b-t2'>공동구매 달성액 50,000,000원</div>
   </div>
    <button className ="prbt">공동 구매 가격</button>
</div>
        </div>
    </S.Container>
  )
}

export default Index