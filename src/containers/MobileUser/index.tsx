import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import * as S from './style'

function Index({email,setEmail,password,setPassword,nick,setNick}:any) {
    const [check,setCheck] = useState(false);
    const [check1,setCheck1] = useState(false);

 
      const ageBtnEvent =()=>{
        if(check === false) {
            setCheck(true)
        }else {
            setCheck(false)
        }
      };

      const useBtnEvent =()=>{
        if(check1 === false) {
            setCheck1(true)
        }else {
            setCheck1(false)
        }
      };

      const history = useHistory()

      const next = () =>{
        if(check===true && check1===true) {
            history.push('/userIm')
        }else{
            alert('체크박스 동의 보감')
        }
      }
    
    
      
  return (
    <S.Container>
        <div className="bg">
            <div className="white-bg">
                <div className="title">REGISTER</div>
                <div className='sub-title'>아트앤가이드의 다양한 서비스를 이용하시려면 로그인을 해주세요.</div>
                <div className='line'/>
                <div className='one'>회원가입약관 (필수)</div>
                <div  className='boxs'>
               <div className='bxi'>
                제1조(목적)
이 약관은 ㈜열매컴퍼니(이하 “회사”)가 운영하는 인터넷 쇼핑몰(이하 “몰”)에서 제공하는 인터넷 관련 서비스(이하 “서비스”)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
<br/>
<br/>
※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」
제2조(정의)<br/>
<br/>
①“몰” 이란 ㈜열매컴퍼니가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 쇼핑몰을 운영하는 사업자의 의미로도 사용합니다.
</div>
               </div>
               <label className='b'>
               <input checked={check}  onChange={ageBtnEvent} type ="checkbox" className='check'/>
               회원가입약관을 읽었으며 내용에 동의합니다.
             </label>
             <div  className='boxs'>
               <div className='bxi'>
                제1조(목적)
                ㈜열매컴퍼니는 개인정보보호법 제30조(개인정보 처리방침의 수립 및 공개)에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립•공개합니다.
<br/>
제1조 (개인정보의 처리 목적)
<br/>
㈜열매컴퍼니(http://artnguide.com)는 개인정보보호법 제15조(개인정보의 수집•이용)에 근거, 소관업무의 수행을 위하여 본인의 동의를 받은 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전 동의를 구하도록 하겠습니다.
<br/>
처리목적 : 미술품 중개·판매 서비스 및 이를 관련한 각종 마케팅<br/>
미술품 소유권 관리
</div>
               </div>
               <label className='b'>
               <input checked={check1}   onChange={useBtnEvent} type ="checkbox" className='check'/>
               개인정보취급방침을 읽었으며 내용에 동의합니다.
             </label>
             <div className='btns'>
                <button className='btn' onClick={next}>개인회원 가입</button>
                <button className='btn2' onClick={next}>법인 회원 가입 </button>
             </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index