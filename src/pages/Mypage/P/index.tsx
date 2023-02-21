import { auth } from 'firebase_config';
import React, { useState } from 'react'
import zxc from './zxc.png'
import * as S from './style'
import Cmodal from '../Cmodal';

function Index() {

	const users = auth.currentUser;	
  const [modal,setModal] = useState(false);

  return (
    <S.Container>
      <div className="jung">
        <div className='title'>구매 상세 정보</div>
        <div className='big'>
          <div className='small'>
        <div className='one0'>
          <div className='t'>주문자 정보</div>
          <div className='oneline'>
            <div className='name'>이름</div>
            <div className='user'>Moon Ly</div>
            <div className='email'>이메일</div>
            <div className='user-e'>{users?.email}</div>
            </div>
            <div className='twoline'>
            <div className='id'>아이디(ID)</div>
            <div className='user-id'>Moon.Ly.3030</div>
            <div className='number'>전화번호</div>
            <div className='user-number'>123-5644-8950</div>
            </div>
            <div className='last'>
            <div className='address'>주소</div>
            <div className='user-address'>25612</div>
            <div className='user-address2'>B03,Newtime seoul,Korean</div>
            </div>
        </div>
        <div className='two'>
          <div className='t2'>배송지 정보</div>
          <div className='fl'>
            <div className='resive'>받으시는 분</div>
            <div className='user-r'>Moon Ly</div>
          </div>
          <div className='tl'>
          <div className='my-number'>연락처</div>
          <div className='my-rnumber'>090-8856-5865</div>
            </div>
            <div className='thl'>
              <div className='add'>배송지</div>
              <div className='user-address2'>B03,Newtime seoul,Korean</div>
            </div>
        </div>
        <div className='three'>
        <div className='t3'>
          <div className='account'>작품 재판매대금 배분 계좌정보</div>
          <div className='push'>입금하실 곳</div>
        </div>
        <div className='flex'>
        <div className='t-name'>은행명<br/>계좌번호<br/>예금주</div>
        <div className='user-i'>국민은행<br/> 123456-789-100000 <br/>홍길동</div>
        <div className='t-name2'>은행명:<br/>계좌번호:<br/>예금주:</div>
        <div className='user-i2'>국민은행<br/> 123456-789-100000 <br/>주식회사 열매컴퍼니</div>
        </div>
        <div className='emergency'>* 작품 재판매대금 배분 계좌정보의 예금주명과 동일하게 입금하셔야 정상적으로
결제완료로 반영됩니다.</div>
        </div>
        <div className='four'>
          <div className='f-t'>증빙 정보</div>
          <div className='aa'>
          <div className='z'>소득공제<br/>(현금영수증 발행)</div>
          <div className='num'>789-7897-9789</div>
          </div>
        </div>
        </div>
        <div className='five'>
          <div className='fititle'>바실리 칸딘스키 The singer 아트 프린트</div>
          <div className='line'></div>
          <div className='content'>
            <img src={zxc} className='picture'></img>
            <div className='right'>
              <div className='big'>
            <div className='code'>상품코드:<br/>주문번호:</div>
            <div className='code-c'>19859506<br/>MN098-203</div>
            </div>
            <div className='cline'></div>
            <div className='big'>
            <div className='content-name'>
            상품금액<br/>
            수량<br/>
            포인트사용<br/>
            최종결제금액<br/>
            상태<br/>
            </div>
            <div className='content-price'>
              220,000원<br/>
              0<br/>
              0<br/>
              220,000원<br/>
              주문<br/>
            </div>
            </div>
            <button onClick={() => setModal(true)} className='cancle'>구매취소요청</button>
            {modal === true ? <Cmodal setModal={setModal}/> :""}
            </div>

          </div>
          
        </div>
        </div>
      </div>
    </S.Container>
  )
}

export default Index