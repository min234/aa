import React, { useEffect } from 'react'
import naver from '../../assets/images/Login/naver.png'
import gogle from '../../assets/images/Login/gogle.png'
import kakao from '../../assets/images/Login/kakao.png'
import facebook from '../../assets/images/Login/facebook.png'
import * as S from './style'
import { useHistory } from 'react-router-dom'
import { auth, signInWithEmailAndPassword } from 'firebase_config'
import { useDispatch } from 'react-redux'
import { login, logout } from 'counter/counterSlice'

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

  return (
    <S.Container>
        <div className="bg">
           <div className="white-bg">
            <div className='title'>LOGIN</div>
            <div className='sub-title'>아트앤가이드의 다양한 서비스를 이용하시려면 로그인을 해주세요.</div>
            <form className='login ' onSubmit={(e) => handleSubmit(e) }>
            <div className='id'>아이디</div>
            <input type='text' value={email}   onChange=
                        {e => setEmail(e.target.value)} className='id-text'></input>
            <div className='password'>비밀번호</div>
            <input type='password' value={password} onChange
                        ={e => setPassword(e.target.value)} className='id-text'></input>
            <input type = 'checkbox' className='check'></input>
            <label className='auto'>자동로그인</label>
            <div className='login-button' onClick={signIn}>로그인</div>
            </form>
            <div className='flex'>
                <div className='one'>회원가입</div>
                <div className='two'>아이디/비밀번호 찾기</div>
            </div>
            <div className='flex'>
                <img src={naver} className='naver'/>
                <img src={gogle} className='gogle'/>
                <img src={kakao} className='kakao'/>
                <img src={facebook} className='facebook'/>
            </div>
            </div> 
        </div>
    </S.Container>
  )
}

export default Index