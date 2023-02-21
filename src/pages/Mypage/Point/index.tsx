import React from 'react'
import * as S from './style'

const top = [
    {
        id : 1,
        name:<div className='number1'>번호</div>,
    },
    {
        id : 2,
        name:<div className='day1'>날짜</div>,
    },
    {
        id : 3,
        name:<div className='content1'>내역</div>,
    },
    {
        id : 4,
        name:<div className='point1'>포인트</div>,
    },
]

const first = [
    {
        id:1,
        day:'2022-01-18',
        content:'상품:[박운섭 산천] 사용',
        point:'1,000 '
    }
]
const second = [
    {
        id:2,
        day:'2022-01-18',
        content:'회원가입해주셔서 감사합니다',
        point:'1,000 '
    }
]
const three = [
    {
        id:3,
        day:'2022-01-18',
        content:'상품:[박운섭 산천] 사용',
        point:'1,000 '
    }
]
const four = [
    {
        id:4,
        day:'2022-01-18',
        content:'회원가입해주셔서 감사합니다',
        point:'1,000 '
    }
]

function Index() {
  return (
    <S.Container>
    
            <div className="title">포인트 사용 내역</div>
            <div className="f">
                <div className='all'>총 보유 포인트:8,153 </div>
                <div className='gun'>총8건</div>
            </div>
    <div className='top'>
        {top.map((e)=> (
            <div className='tt'>
                <div className='number'>{e.name}</div>
                </div>
        ))}
    </div>
    <div className='first'>
        {first.map((e)=> (
            <div className='onez'>
                <div className='n'>{e.id}</div>
                <div className='day'>{e.day}</div>
                <div className='content'>{e.content}</div>
                <div className='point'>{e.point}</div>
            </div>
        ))}
    </div>
    <div className='second'>
        {second.map((e)=> (
            <div className='twoz'>
                <div className='n2'>{e.id}</div>
                <div className='day2'>{e.day}</div>
                <div className='content2'>{e.content}</div>
                <div className='point2'>{e.point}</div>
            </div>
        ))}
    </div>
    <div className='three'>
        {three.map((e)=> (
            <div className='thhz'>
                <div className='n'>{e.id}</div>
                <div className='day'>{e.day}</div>
                <div className='content'>{e.content}</div>
                <div className='point'>{e.point}</div>
            </div>
        ))}
    </div>
    <div className='four'>
        {four.map((e)=> (
            <div className='fourz'>
                <div className='n2'>{e.id}</div>
                <div className='day2'>{e.day}</div>
                <div className='content2'>{e.content}</div>
                <div className='point2'>{e.point}</div>
            </div>
        ))}
    </div>
      
    </S.Container>
  )
}

export default Index