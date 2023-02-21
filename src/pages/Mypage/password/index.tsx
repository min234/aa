import React from 'react'
import * as S from './style'

function Index({setGo} : any) {
  return (
    <S.Container>
        <div className="modal">
            <div className='white-modal'>
                <div className='title23'>비밀번호 변경</div>
                <div className='now'>현재 비밀번호</div>
                <input className='n' placeholder='현재 비밀번호 입력' type='text'/>
                <div className='new'>새로운 비밀번호</div>
                <input className='n' placeholder='새로운 비밀번호 입력' type='text'></input>
                <div className='re'>새로운 비밀번호 확인</div>
                <input className='n' placeholder='새로운 비밀번호 다시 입력' type='text'></input>
                <div className='button1'>
                    <button className='cancle' onClick={() => setGo(false)}>취소</button>
                    <button className='ok1'>확인</button>
                </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index