import React, { useState } from 'react'
import AnsdmlM from '../ansdmlM'
import * as S from './style'

const data = [ 
    {
        id:1,
        name:'공동구매'
    },
    {
        id:2,
        name:'공동구매'
    }
]

function Index() {
    const [o,setO] = useState('')
    const [d,setD] = useState(false)
  return (
    <S.Container>
        <div className="container">
            <div className="right">
                <div className="t">제목</div>
                <div className="kind">문의종류</div>
            </div>
            <div className='input'>
                <input className="in"></input>
                <select className='ass'  onChange={(e) => {
                                          const sele = e.target.value;
                                          setO(sele);
                                      } }>
                                          {data.map(el => {
                                              return <option key={el.id}>{el.name}</option>;
                                          })}
                                      </select>
            </div>
            <div className='detail'>상세내용</div>
            <input className='big'></input>
            <div className='zx'>첨부파일 및 이미지(여부)</div>
            <button className='file'>파일첨부</button>
            <button className='digi' onClick={() => setD(true)}>등록하기</button>
            {d === true ? <AnsdmlM setD= {setD}/>:''}
        </div>
    </S.Container>
  )
}

export default Index