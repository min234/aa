import React, { useState } from 'react'
import { useScrollContainer } from 'react-indiana-drag-scroll'
import Ansdml from '../ansdml'
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
        name:<div className='content1'>답변여부</div>,
    },
    {
        id : 4,
        name:<div className='point1'>등록일</div>,
    },
]

const first = [
    {
        id:1,
        day:'Question 1',
        content:'답변완료',
        point:'2022-03-08'
    }
]
const second = [
    {
        id:2,
        day:'Question 2',
        content:'미답변',
        point:'2022-03-08'
    }
]
const three = [
    {
        id:3,
        day:'Question 3',
        content:'답변완료',
        point:'2022-03-08'
    }
]
const four = [
    {
        id:4,
        day:'Question 4',
        content:'미답변 ',
        point:'2022-03-08 '
    }
]

function Index() {
    const [open,setOpen] = useState(false);
    const [op,setOp] = useState(false);
    const toggleMenu = () => {
        setOpen(open => !open); // on,off 개념 boolean
    }
   
  return (
    <S.Container>
    
            <div className="title">1:1 문의사항</div>
            <div className={`block ${op === true ? 'active' : ""}`}>
            <div className='aazz'>휴일을 제외한 평일에는 하루 이내에 답변 드리겠습니다. 자주 묻는 질문을 통해서도 확인 할 수 있습니다.</div>
           
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
    
    <div className='first' onClick={toggleMenu}>
        {first.map((e)=> (
            <div className='onez'>
                <div className='n'>{e.id}</div>
                <div className='day'>{e.day}</div>
                <div className='content'>{e.content}</div>
                <div className='point'>{e.point}</div>
            </div>
        ))}
        <div className={`a ${ open  ? 'active' : "close"}`}>
      
            <div className='otitle'>상세내용</div>
            <div className="x" >
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </div>
                <div className='l'></div>
                <div className='otitle2'>답변</div>
                <div className='xx'>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </div>
        </div>
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
      <button className='drong' onClick={() => setOp(true)}>문의등록</button>
      </div>
      {op === true ? <Ansdml/>:''}
    </S.Container>
  )
}

export default Index