import React from 'react'
import * as S from './style'

function Index({email,setEmail,password,setPassword,nick,setNick}:any) {
  return (
    <S.Container>
        <div className="bg">
            <div className='white'>
                <div className='title'>MEMBER REGISTER</div>
                <div className='sub-title'>아트앤드가이드의 다양한 서비스를 이용하시려면 로그인을 해주세요.</div>
                <div className='id'>아이디 </div>
                <input type= 'text' className='id-text'></input>
                <div className='name'>성명</div>
                <input type='text' className='id-text'></input>
                <div className='email'>이메일</div>
                <input type='text' className='id-text'></input>
                <input type='checkbox' className='one'/>
                <label className='onela'>정보메일 수신동의</label>
                <div className='phone'>휴대폰</div>
                <input type = 'text'/>
                <input type= 'checkbox'/>
                <label className='sns'>SMS 수신동의</label>
                <div className='password'>비밀번호</div>
                <input type =' password' className='id-text'/>
                <div className='password-re'>비밀번호 확인</div>
                <input type ='password' className='id-text'/>
                <div className='birthday' >생년월일</div>
                <input type = 'text' placeholder='YYY/MM/DD' className='id-text' />
                <div className='se'>성별</div>
                </div>
                <div className='white2'>
                    <div className='address'>주소</div>
                    <button className='add'></button>
                    <input type='text' className='id-text'></input>
                    <input type='text' className='id-text'></input>
                    <input placeholder='나머지주소입력' type='text' className='id-text'></input>
                    <div className='account'>계좌정보</div>
                    <div className='im'>입금자</div>
                    <input type='text' className='id-text'></input>
                    <div className='bank'>은행명</div>
                    <input type='text' className='id-text'></input>
                    <div className='number'>계좌번호</div>
                    <input type='text' placeholder='ex)123-12345-12345678' className='id-text'></input>
                    <div className='add'>추가정보</div>
                    <input type='checkbox'></input>
                    <label className='az'>소득공제(현금영수증 발행)</label>
                    <input type='text' className='id-text'></input>
                    <input type='checkbox'></input>
                    <label className='x'>사업자지출증빙</label>
                    <input type='text' className='id-text'></input>
                </div>
        </div>
    </S.Container>
  )
}

export default Index