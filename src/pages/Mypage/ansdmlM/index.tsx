import React from 'react'
import * as S from './style'

function Index({setD} :any) {
  return (
    <S.Container>
        <div className="modal">
            <div className="white-modal">
                <div className="tt">게시글이<br/>
등록되었습니다.</div>
<button className='cl' onClick={() => setD(false)}>확인</button>
            </div>
        </div>
    </S.Container>
  )
}

export default Index