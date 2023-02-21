
import React, { RefObject, useEffect }  from "react";
import * as S from './style'
import { useScrollContainer } from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'

const data = [ 
    {
        id:'NO.1',
        title:'스탠리 휘트니 Stanley Whitney',
        un:'Untitled, 1999',
        price:'낙찰가격: 1,800,000,000원',
        da:'거래일: 2022.03.22',
        a:'출품처: 서울옥션'
    },
    {
        id:'NO.2',
        title:'김환기 Kim Whanki',
        un:'화실, 1957',
        price:'낙찰가격: 1,800,000,000원',
        da:'낙찰가격: 1,800,000,000원',
        a:'출품처: 서울옥션'
    },
    {
        id:'NO.3',
        title:'김환기 Kim Whanki',
        un:'화실, 1957',
        price:'낙찰가격: 1,800,000,000원',
        da:'낙찰가격: 1,800,000,000원',
        a:'출품처: 서울옥션'
    },
    {
        id:'NO.4',
        title:'스탠리 휘트니 Stanley Whitney',
        un:'Untitled, 1999',
        price:'낙찰가격: 1,800,000,000원',
        da:'거래일: 2022.03.22',
        a:'출품처: 서울옥션'
    },
]

 
function Index() {
    const scrollContainer = useScrollContainer();
  return (
    <S.Container>

        <div className="container">
        <div className='sc-title'>경매 낙찰가<br/>
       TOP 10 ARTISTS</div>
    
    
       <div className="x" ref={scrollContainer.ref}>
            {data.map((d,index) => (
                <div className='item-box' key={index}>
                    <div className='item-id'>
                    <div className='sc-id'>{d.id} </div>
                    <div className='item-title'>{d.title}</div>
                </div>
                <div className='item-s'>
                <div className='sc-un'>{d.un}</div>
                <div className='sc-price'>{d.price}</div>
                <div className='all'>
                <div className='sc-date'>{d.da}</div>
                <div className='sc-a'>{d.a}</div>
                </div>
                    </div>
                </div>
                
            ))}
  
            </div>
             </div>
        
      
        
    </S.Container>
  )
}

export default Index


