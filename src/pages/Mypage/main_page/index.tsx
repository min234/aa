
import useWindowSize, { Size } from 'hooks/useWindowSize'
import React, { useEffect } from 'react'
import Art from '../Art'
import Art2 from '../Art2'
import Art3 from '../Art3'
import Auto from '../auto'
import Scroll from '../Scroll'
import Scroll2 from '../Scroll2'
import Slick from '../slick'
import MobileSilck from '../mobileSlick'
import * as S from './style'
import { auth } from 'firebase_config'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from 'counter/counterSlice'


function Index({email,nick} : any) {
  const size: Size = useWindowSize();
  const mobile = size.width && size.width > 768;

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
console.log(email)

  return (
    <S.Container>
      <div className="container">
        <div className="bg">
       {mobile ? <Slick/> : < MobileSilck/>}
       </div>
       <Auto/>
      <Art/>
      <Art2/>
      <Art3/>
      <Scroll/>
      <Scroll2/>
 
      </div>
   
    </S.Container>
  )
}

export default Index