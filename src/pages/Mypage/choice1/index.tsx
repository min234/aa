import React, { useState } from 'react'
import Cancle from '../Cancle'
import Password from '../password'
import * as S from './style'

function Index() {
   
    const [x,setX] = useState([])
 
    const handle = (e : any) => {
        setX(e.target.value)
    }
    const [go,setGo] = useState (false)
    const GG = () => {
        setGo(true)
        console.log(go)
    }
    const [cancle,setCancle] = useState (false)
    const can = () => {
        setCancle(true)
    }
  return (
    <S.Container>
        <div className="ba">
            <div className='custom'>회원정보수정</div>
            <div className='custom-text'>+회원정보 수정시 변경한 내용을 확인하기 바랍니다.</div>
            <div className='line'/>
            <div className='first'>
            <div className='id'>아이디*</div>
            <div className='name'>성명</div>
            </div>
            <div className='firstI'>
            <input type = 'text' className='i'></input>
          
            <input type = 'text' className='i2'></input>
            </div>
            <div className='two'>
                <div className='email'>이메일*</div>
                <div className='phone'>휴대폰</div>
            </div>
            <div className='firstI'>
            <input type = 'text' className='i'></input>
            <input type = 'text' className='i2'></input>
            </div>
            <div className='box'>
                <input type= "checkbox" className="checkbox"></input>
                <div className="label">정보매일 수신동의</div>
                <input type= "checkbox" className="checkbox1"></input>
                <label className="label">SMS 수신동의</label>
            </div>
            <div className='three'>
                <div className='year'>생년월일</div>
                <div className='se'>성별</div>
            </div>
        
            <div className='four'>
                <input type = 'text' className='y' placeholder='YYYY/MM/DD'/>
                <input type = 'radio' className='radio' id='s' name="age" onChange={handle} value="man"/>
                <label className='man'>남자</label>
                <input type = 'radio' className='radio2 ' id='s' name="age"  value="women"/>
                <label className='women'>여성</label>
            </div>
            <div className='password'>비밀번호
      
            </div>
            <input type = 'password' className='i'></input>
            <button type='button' className='change' onClick={GG}>변경하기</button>
            {go === true ? <Password setGo = {setGo}/>: ""}
            <div className='line'/>
            <div className='hidden'>
                <div className='address'>주소 </div>
                <button className='search-post'>우편번호 검색</button>

                <div className='display'>
                <input type='text' className='bin'></input>
                <input type='text2' className='bin2'></input>
                </div>
                <input type= 'text' className='last' placeholder='나머지주소입력'></input>
                <div className='name'>매각분배정보</div>
                <div className='two'>
                <div className='user'>예금주</div>
                <div className='bank-name'>은행명</div>
                </div>
                <div className='bin22'>
                    <input type='text' className='bin'></input> 
                     <input type='text' className='bin2'></input>
                </div>
                <div className='account'>계좌번호</div>
                <input type='text' className='bin'></input>
                <div className='content'>증빙정보</div>
                <div className='r'>
                    <input type='radio' name='i'></input>
                    <label className='k'>소득공제(현금영수증 발행)</label>
                    <input type='radio' name='i'></input>
                    <label className='k2'>사업자지출증빙</label>
                </div>
                <div className='bin22'>
                <input type='text' className='bin'></input> 
                     <input type='text' className='bin2'></input>
                </div>
                <button className='ok'>확인</button>
            <button className='bye' onClick={can}>회원탈퇴 요청</button>
            {cancle === true ? <Cancle setCancle= {setCancle}/> : ""}
            </div>
            
        </div>
    </S.Container>
  )
}

export default Index