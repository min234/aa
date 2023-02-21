import { Router } from 'express'
import React, { useState } from 'react'
import { Link, NavLink, Route, Switch } from 'react-router-dom'
import Choice1 from '../choice1'
import P from '../P'
import pic from './pic.png'
import pic1 from './pic1.png'
import * as S from './style'

const data = [
    {
        id:1,
        name:'공동구매 참여 횟수',
        number: '8'
    },
    {
        id:2,
        name:'매각 작품수',
        number: '15'
    },
    {
        id:3,
        name:'보유 작품 수',
        number: '20'
    },
    {
        id:4,
        name:'총 구매 금액',
        number: '1,000,000'
    },
    {
        id:5,
        name:'매각 총액',
        number: '1,000,000'
    },
    {
        id:6,
        name:'보유 작춤 총액',
        number: '2,000,000'
    },
]

const dddd = [
    {
        id:1,
        order:'948775923',
        code:'81',
        name:'Landscape with Snow',
        t:'Landscape with Snow',
        numbers:'1',
        price:'500,000원',
        day:'2022-01-18',
        day2:'12:31',
        ing:'진행중',
        cancle:'취소',
    },
    {
        id:2,
        order:'948775923',
        code:'82',
        name:'앤디워홀 Flowers, 1964',
        t:'앤디워홀 Flowers, 1964',
        numbers:'1',
        price:'500,000원',
        day:'2022-01-18',
        day2:'12:31',
        ing:'진행중',
        cancle:'주문',
    },
    {
        id:3,
        order:'948775923',
        code:'74',
        name:'Landscape with Snow',
        t:'Landscape with Snow',
        numbers:'1',
        price:'500,000원',
        day:'2022-01-18',
        day2:'12:31',
        ing:'진행중',
        cancle:'취소중',
    },
    {
        id:4,
        order:'948775923',
        code:'73',
        name:'앤디워홀 Flowers, 1964',
        t:'앤디워홀 Flowers, 1964',
        numbers:'1',
        price:'500,000원',
        day:'2022-01-18',
        day2:'12:31',
        ing:'진행중',
        cancle:'취소중',
    }
]
const di = [
    {
        id:1,
        name: '전체',
    },
    {
        id:2,
        name:'첫번쨰',
    },
    {
        id:3,
        name:'두번쨰'
    }
]
const top = [
    {
        id:1,
        name:<div className='q'>번호</div>,
    },
    {
        id:2,
        name:<div className='w'>주문번호</div>,
    },
    {
        id:3,
        name:<div className='e'>상품코드</div>,
    },
    {
        id:4,
        name:<div className='r'>상품명</div>,
    },
    {
        id:5,
        name:<div className='t'>수량</div>,
    },
    {
        id:6,
        name:<div className='y'>구매금액</div>,
    },
    {
        id:7,
        name:<div className='u'>주문일자</div>,
    },
    {
        id:8,
        name:<div className='i'>진행상황</div>,
    },
    {
        id:9,
        name:<div className='o'>주문상태</div>,
    },
]
 const bot = [
    {
        id:1,
        number:'948775923',
        code:'81',
        pic:<img src={pic} className='image'/>,
        title:'Landscape with Snow',
        title2:'Landscape with Snow',
        one:'1',
        price:'5,00,000',
        day:'2022-01-18 12:31',
        img:'진행중',
        cancle:'취소',
    },
    {
        id:3,
        number:'948775923',
        code:'74',
        pic:<img src={pic} className='image'/>,
        title:'Landscape with Snow',
        title2:'Landscape with Snow',
        one:'1',
        price:'5,00,000',
        day:'2022-01-18 12:31',
        img:'취소중',
        cancle:'주문',
    },
  
 ]
 const bot2 = [
    {
        id:2,
        number:'948775923',
        code:'82',
        pic:<img src={pic1} className='image'/>,
        title:'앤디워홀 Flowers, 1964',
        title2:'앤디워홀 Flowers, 1964',
        one:'1',
        price:'5,00,000',
        day:'2022-01-18 12:31',
        img:'진행중',
        cancle:'주문'
    },
    {
        id:4,
        number:'948775923',
        code:'73',
        pic:<img src={pic1} className='image'/>,
        title:'앤디워홀 Flowers, 1964',
        title2:'앤디워홀 Flowers, 1964',
        one:'1',
        price:'5,00,000',
        day:'2022-01-18 12:31',
        img:'진행중',
        cancle:'취소중'
    },
 ]
function Index() {
    const [c,setC] = useState(1)
    const [selectedDropValue, setSelectedDropValue] = useState('');
    const [search, setSearch] = useState("");

    const filterTitle =bot.filter((p) => {
        return p.code.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
    })
    const filterTitle2 =bot2.filter((p) => {
        return p.code .replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
    })
    const onChange = (e : any) => {
        setSearch(e.target.value)
    }
  

  return (
   <S.Container>
    <div className='be' >
    <div className='first'>
        <div className={`order ${ c === 1 ? "active" : ""}`} onClick={() => {setC(1)}}>주문내역</div>
        <div className={`order-wait ${ c === 2 ? "active" : ""}`} onClick={() => {setC(2)}}>대기 신청 내역</div>
        <div className = 'title'>아트 구매 내역</div>
      
        <input className='search' value={search} onChange={onChange} placeholder='작가명 작품명 입력 '></input>
    </div>
    <div className='two'>
        <div className='data'>
        <div className='line'/>
      <div className='line2'/>
      <div className='line3'/>
      <div className='line4'/>
      <div className='line5'/>
        {data.map((d) => (
            <div className='d'>
            <div className='name'>{d.name}</div>
            <div className='number'>{d.number}</div>
            </div>
      ))}
    
        </div>
        <div className='three'>
       
        </div>
        <div className='dddd'>
            {dddd.map((d) => (
                <div className='a'>
                  
                    </div>
            ))}
        </div>
        <div className='fo'>
            <div className='s-name'>진행상황:</div>
        <select className='ass' onChange={(e) => {
                                          const sele = e.target.value;
                                          setSelectedDropValue(sele);
                                      } }>
                                          {di.map(el => {
                                              return <option key={el.name}>{el.name}</option>;
                                          })}
                                      </select>
                                      <div className='s-name'>주문상태:</div>
                                      <select className='ass' onChange={(e) => {
                                          const sele = e.target.value;
                                          setSelectedDropValue(sele);
                                      } }>
                                          {di.map(el => {
                                              return <option key={el.name}>{el.name}</option>;
                                          })}
                                      </select>
                                      <button type="button" className='collet'>적용</button>
                                      </div>
        <div className="five">
            <div className="top">
                {top.map((e)=> (
                    <div className="content">
                       {e.name}
                        </div>
                ))}
            </div>
           <div className='top2'>
            {filterTitle.map((e)=> (
                <NavLink to ='/my/qwer'>  
               <div className="bot-content">    
                        <div className="id">{e.id}</div>
                        <div className="number12">{e.number}</div>
                        <div className="code1">{e.code}</div>
                        <div className='pic'>{e.pic}</div>
                        <div className='dee'> 
                    <div className="title12">{e.title}</div>
                    <div className='title2'>{e.title2}</div>
                </div>
                <div className='one'>{e.one}</div><div className='price1'>{e.price}</div>
                <div className='day'>{e.day}</div><div className='ing'>{e.img}</div>
                <div className='cancle'>{e.cancle}</div>
                
                    </div>
                  </NavLink>
            ))}
            </div>
            <div className='top3'>
                {filterTitle2.map((e)=> (
                    <div className="bot2-content">
                    <div className="id2">{e.id}</div>
                    <div className="number1">{e.number}</div>
                    <div className="code">{e.code}</div>
                    <div className='pic1'>{e.pic}</div>
                    <div className='de'>
                    <div className="title12">{e.title}</div>
                    <div className='title2'>{e.title2}</div>
                    </div>
                    <div className='one1'>{e.one}</div>
                    <div className='price'>{e.price}</div>
                    <div className='day1'>{e.day}</div>
                    <div className='ing1'>{e.img}</div>
                    <div className='cancle1'>{e.cancle}</div>
                        </div>
                ))}
                </div>         
        </div>
      
    </div>
   
    </div>

   </S.Container>
  )
}

export default Index