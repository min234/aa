import React, { useEffect, useState } from 'react'
import Choice1 from '../choice1';
import * as S from './style'
import { auth } from 'firebase_config'
import { login, logout } from 'counter/counterSlice';
import { useDispatch } from 'react-redux';
import Publick from '../publick';
import { Link, NavLink, Route, Router, Switch } from 'react-router-dom';
import P from '../P';
import Artput from '../artput';
import Point from '../Point';
import One from '../one';


function Index({email} : any) {
    const [choice,setChoice] = useState(1);
    const dispatch = useDispatch();
    useEffect(()=>{
        auth.onAuthStateChanged(authUser => {
          console.log(authUser)
          if(authUser){
             dispatch(login({
              user: email
            }))
            
          }else{
            dispatch(logout())
          }
        })
      },[])
  return (
    <S.Container>
        <div className='bg'>
            <div className='brand'>
                <div className='title'>국내 대표 경매사 아트앤가이드와 함께 최고의 아트테크 서비스제공</div>
                <button className='go'>Go to Yeolmae</button>
            </div>
            <div className='button'>
              <NavLink to ='/my/m'>
                <div className='me' >나의 계정</div>
                </NavLink>
                <NavLink to ='/my/mm'>
                <div className= 'public' >공동구매 내역</div>
                </NavLink>
                <NavLink to ='/my/mmm'>
                <div className= 'art' >아트 구매 내역</div>
                </NavLink>
                <NavLink to ='/my/mmmm'>
                <div className= 'point' >포인트 사용 내역</div>
                </NavLink>
                <NavLink to='/my/mmmmm'>
                <div className= 'one' >1:1문의사항</div>
                </NavLink>
            </div>
            
            <Switch>
            <Route path='/my/m' >
            <Choice1/>
              </Route>
              <Route path='/my/mm' >
            <Publick/>
              </Route>
              <Route path='/my/mmm'>
                <Artput/>
              </Route>
              <Route path='/my/mmmm'>
                <Point/>
              </Route>
              <Route path='/my/mmmmm'>
                <One/>
              </Route>
            </Switch>
            
        </div>
        
    </S.Container>
  )
}

export default Index

function dispatch(arg0: { payload: any; type: "user/login"; }) {
    throw new Error('Function not implemented.');
}
