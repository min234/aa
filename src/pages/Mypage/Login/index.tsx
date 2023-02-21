import React, { useEffect, useState } from 'react'
import Login from './login.png'
import naver from '../../../assets/images/Login/naver.png'
import facebook from '../../../assets/images/Login/facebook.png'
import gogle from '../../../assets/images/Login/gogle.png'
import kakao from '../../../assets/images/Login/kakao.png'
import * as S from './style'
import {
  signInWithEmailAndPassword, // 코드 추가
} from "firebase/auth";
import { auth } from "../../../firebase_config";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from 'counter/counterSlice'
import Id from '../id'


function Index({email,setEmail,password,setPassword,nick} : any) {

    const history = useHistory();
    
    const signIn = (e : any) => {
      e.preventDefault()
    
     signInWithEmailAndPassword(auth,email,password) 
     .then(auth => {
         if (auth) {
           history.push('/');
         }
       })
       .catch(error => alert('zz'))
 }
 

const dispatch = useDispatch();

const handleSubmit = (e : any) =>{
  e.preventDefault();
  dispatch((
    login({ 
      user: email,
    })
  ))
}

useEffect(()=>{
  auth.onAuthStateChanged((authUser) => {
    console.log(authUser)
    if(authUser){
       dispatch(login({
        displayName : email,
        uid: nick 
      }))
      
    }else{
      dispatch(logout())
    }
  })
},[])

const [modal,setModal] = useState(false);

  return (
    <S.Container>
        <div className="login-bg" >
            <div className="login-page">
                <img src = {Login} className="login-img"/>
                <div className='right'>
                <div className="login-title">Login</div>
                <div className="login-text">아트앤가이드의 다양한 서비스를 이용하시려면 로그인을 해주세요.</div>
                <form className='login ' onSubmit={(e) => handleSubmit(e) }>
                <div className='id' >아이디</div>
                <input type='text' value={email}   onChange=
                        {e => setEmail(e.target.value)} className='in-id'/>
                <div className='password'>비밀번호</div>
                <input type='password' value={password} onChange
                        ={e => setPassword(e.target.value)} className='in-password'/>
             <br/>
               <input type ='checkbox' className='box'/>
                <label className='auto'>자동로그인</label>
                <br/>
                <button className='button' type='submit' onClick={signIn}>로그인</button>
                </form>
               <div className='bt'>
                <img src ={naver} className='naver'/>
                <img src = {gogle} className='gogle'/>
                <img src = {kakao} className='kakao'/>
                <img src ={facebook} className='facebook'/>
                <Link to = '/user'>
                <div className='g'  >회원가입</div>
                </Link>
                <div className='l'></div>
                <div className='look-for' onClick={() => setModal(true)}>아이디/비밀번호 찾기</div>
                {modal ? <Id modal ={setModal}/> : ""}
               </div>
                </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index



