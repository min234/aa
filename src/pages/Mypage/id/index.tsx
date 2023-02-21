import e from 'express';
import { auth } from 'firebase_config';
import React, { useState } from 'react'
import  * as S  from './style'

function Index({modal} : any) {
    const [em,setEm] = useState('')
    const [i,setI] = useState('')
    const [t,setT] = useState(false);
    

    

    const s = auth.currentUser

 
  return (
    <S.Container >
        <div className="modal" >
            <div className={`id-bg ${em ? "active":""}`}>
                <div className="one">
                    <div className={`id ${t === false ? "active" : ""}`} onClick={() => setT(false)}>아이디 찾기</div>
                    <div className={`password ${t === true ? "active" : ""}`} onClick={() => setT(true)}>비밀번호 찾기</div>
                </div>
                <div className={`two ${t === false ? "active" : ""}`}>
                    <div className="email">이메일</div>
                    <input type='text' value={em} onChange
                        ={e => setEm(e.target.value)} className='e'/>
               <button className='ok' >가입정보 확인</button>
            
               <div className='text'>아이디가 고객님의 가입하신 이메일로 발송됩나다.</div>
                </div>
                <div className={`three ${t === true ? "active" : ""}`}>
                    <div className="id2">아이디</div>
                    <input type='text' value={i} onChange
                        ={e => setI(e.target.value)} className='e'/>
                <div className="email">이메일</div>
                <input type='text' value={em} onChange
                        ={e => setEm(e.target.value)} className='e'/>
               <button className='ok'>가입정보 확인</button>
               <div className='text'>아이디가 고객님의 가입하신 이메일로 발송됩나다.</div>
                    </div>
            </div>
            <div className={`next ${em  ? "active" : ""}`}>
                <div className="id2-bg">
                    <div className="t2">등록하신 메일로 보내드렸습니다.
분실하지 않도록 유의하여 주시기 바랍니다.</div>
                <button className='oki' onClick={() => {modal(false)}}>확인</button>
                </div>
               </div>
        </div>
    </S.Container>
  )
}

export default Index