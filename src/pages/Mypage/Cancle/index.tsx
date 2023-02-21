import React from 'react'
import * as S from './style'

function Index({setCancle} : any) {
  return (
    <S.Container>
        <div className="modal">
            <div className="white-modal">
                <div className="t">정말 탈퇴하시겠습니까?</div>
                <div className="flex">
                    <button className="cancle" onClick={() => setCancle(false)}>취소</button>
                    <button className="ok1">확인</button>
                </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index