import React from 'react'
import * as S from './style'

function index() {
  return (
    <S.Container>
        <div className="bg">
            <div className="company">
                <div className="name">COMPANY</div>
                <div className="wn">(주) 열매컴퍼니</div>
                <div className="owner">대표자 : 김재욱</div>
                <div className="address">주소 : 06182 서울 강남구 영동대로 407, 코니빌딩 4층</div>
                <div className="address2">31470 충청남도 아산시 배방읍 희망로46번길 45-11, 502호</div>
                <div className="num">사업자등록번호 : 664-88-00573</div>
                <div className="site">사이트 이용약관 |  구매자약관 | 판매자약관 | 개인정보처리방침</div>
                <div className="s">© Yeolmaecompany. all rights reserved</div>
            </div>
            <div className="BANKINFO">
                <div className="name2">BANK INFO</div>
                <div className='rodls'>개인정보관리책임자 : 김재욱</div>
                <div className='dlqrma'>입금계좌 : 국민은행 033201-04-177604</div>
                <div className="dPrma">예금주 : ㈜열매컴퍼니</div>
                <div className="dlqrma">입금계좌 : 국민은행 350401-04-149344</div>
                <div className="dPrmawn">예금주 : 주식회사 열매 컴퍼니</div>
            </div>
            <div className='CONTACT'>
                <div className='name3'>CONTACT</div>
                <div className='num2'>070-5015-0773</div>
                <div className='e'>info@artnguide.com</div>
                <div className='hours'>HOURS</div>
                <div className='time'>평일 10:00~18:00 (점심시간 12:00~13:00)</div>
            </div>
        </div>
    </S.Container>
  )
}

export default index