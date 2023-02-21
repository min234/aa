import React from 'react'
import { useScrollContainer } from 'react-indiana-drag-scroll'
import * as S from './style'

const data = [
    {
        id:1,
        title:'NEWSLETTER',
        may:'MAY 2022',
        vol:'VOL 130',
        ti:'월간 미술시장 경매결과 REVIEW',
        review:'다양성이 확대되는 미술시장 뉴 페이스들의 각축전 - 최고가 TOP 10 신진작가 등용문, 제로베이스',
        ti2:'월간 작가별 경매결과  REVIEW',
        review2:'TOP 해외아티스트 부터 이우환, 박서보까지! 국내 경매사들의 경매 데이터를 바탕으로 미술품 투자의 가이드 제공'
    },
    {
        id:2,
        title:'NEWSLETTER',
        may:'MAY 2022',
        vol:'VOL 130',
        ti:'월간 미술시장 경매결과 REVIEW',
        review:'다양성이 확대되는 미술시장 뉴 페이스들의 각축전 - 최고가 TOP 10 신진작가 등용문, 제로베이스',
        ti2:'월간 작가별 경매결과  REVIEW',
        review2:'TOP 해외아티스트 부터 이우환, 박서보까지! 국내 경매사들의 경매 데이터를 바탕으로 미술품 투자의 가이드 제공'
    },
    {
        id:3,
        title:'NEWSLETTER',
        may:'MAY 2022',
        vol:'VOL 130',
        ti:'월간 미술시장 경매결과 REVIEW',
        review:'다양성이 확대되는 미술시장 뉴 페이스들의 각축전 - 최고가 TOP 10 신진작가 등용문, 제로베이스',
        ti2:'월간 작가별 경매결과  REVIEW',
        review2:'TOP 해외아티스트 부터 이우환, 박서보까지! 국내 경매사들의 경매 데이터를 바탕으로 미술품 투자의 가이드 제공'
    },
    {
        id:4,
        title:'NEWSLETTER',
        may:'MAY 2022',
        vol:'VOL 130',
        ti:'월간 미술시장 경매결과 REVIEW',
        review:'다양성이 확대되는 미술시장 뉴 페이스들의 각축전 - 최고가 TOP 10 신진작가 등용문, 제로베이스',
        ti2:'월간 작가별 경매결과  REVIEW',
        review2:'TOP 해외아티스트 부터 이우환, 박서보까지! 국내 경매사들의 경매 데이터를 바탕으로 미술품 투자의 가이드 제공'
    },
]

function Index() {
    const scrollContainer = useScrollContainer();
  return (
    <S.Container>
        <div className='container'>
        <div className='sc2-bg'>
            <div className='sc2'>
            <div className='sc2-title'>NEWSLETTER</div>
            <div className='sc2-name'>아트앤가이드 뉴스레터</div>
            </div>
            <div className="x" ref={scrollContainer.ref}>
                {data.map((d,index) => (
                    <div className='item-box2' key={index}>
                        <div className='item-title'>{d.title}</div>
                        <div className='item-maybox'>
                        <div className='item-may'>{d.may}</div>
                        <div className='item-vol'>{d.vol}</div>
                            </div>
                            <div className='item-ti'>{d.ti}</div>
                            <div className='item-re'>{d.review}</div>
                            <div className='item-ti2'>{d.ti2}</div>
                            <div className='item-re2'>{d.review2}</div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </S.Container>
  )
}

export default Index