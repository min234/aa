import React from 'react'
import * as S from './style'

function Index({setModal}: any) {
  return (
    <S.Container>
        <div className="modal">
            <div className='white-model'>
                <div className='modal-title'>취소 및 환불 규정</div>
                <div className='scontent'>
                    <div className='s'>
                    <div className='d12'> 입금 후 12시간 이내 환불 요청 시:</div>전액 환불</div>  
                    <div className='s'>
                <div className='d12'>입금 후 3일 이내 환불 요청 시:</div> 3%의 환불 수수료 </div>발생
           
                <div className='d12'>입금 후 3일 이후부터 소유권 확정(블록체인 </div> 
                <div className='s'> 
                <div className='d12'>기입 시점)전까지 요청 시:</div>7%의 환불 수수료 발생 </div>
                <div className='d12'>블록체인 기입 시점: 환불 불가</div>
             
환불 시 계좌명의인은 구매회원과 동일인이어야 하며, 동일하지 않을 경우 환불이 거절됩니다.</div>
            <div className='s'>
                <button className='ca' onClick={() => setModal(false)}>취소</button> 
                <button className='oo'>확인</button>
            </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index