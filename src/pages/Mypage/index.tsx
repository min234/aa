import React, { useEffect, useState } from "react";
import Header from "containers/Header";
import Main from './main_page'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import * as S from "./style";
import Company01 from "./Company01";
import MobileHeader from "containers/mobileHeader";
import useWindowSize, { Size } from "hooks/useWindowSize";
import Stikcy from "./Stikcy";
import Login from "./Login";
import store  from '../../components/store/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { login, logout} from "counter/counterSlice";
import { auth, db } from "firebase_config";
import User from "./user";
import UserIm from "./userIm";
import Id from "./id";
import My from "./My";
import P from "./P";
import Choice1 from "./choice1";
import Publick from "./publick";
import MobileLogin from "containers/MobileLogin";
import MobileUser from "containers/MobileUser";
import MobileUserlm from "containers/MobileUserlm";


function MyPage() {
 
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if(authUser){
         dispatch(login({
        user: email,
        }))
        
      }else{
        dispatch(logout())
      }
    })
  },[])

  const size: Size = useWindowSize();
  const mobile = size.width && size.width > 768;
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nick,setNick] = useState('');


  return(

  <div>
    <S.Container>
    <Provider store={store}>
 
    <Router>
      <div>
    { mobile ? <Header email ={email} nick={nick}/>:<MobileHeader email ={email} nick={nick} />}
    </div>
  <Switch>
        <Route exact path='/'>
        <Main  nick={nick} email ={email} password={password} setEmail={setEmail} setPassword={setPassword} />
          </Route>
        </Switch>
        <Switch>
        <Route path='/stikcy' component={Stikcy}/>
        </Switch>
        <Switch>
        <Route path='/login' >
        <div>
        {mobile ? <Login nick={nick} email ={email} password={password} setEmail={setEmail} setPassword={setPassword}   />
        : <MobileLogin nick={nick} email ={email} password={password} setEmail={setEmail} setPassword={setPassword}/> }
            </div>
          </Route>
          <Route path='/user' >
          {mobile ? <User/> : <MobileUser/>}  
          </Route>
          <Route path='/userIm' >
       { mobile ? <UserIm email ={email} password={password} setEmail={setEmail} setPassword={setPassword} nick={nick} setNick={setNick}  />
       : <MobileUserlm email ={email} password={password} setEmail={setEmail} setPassword={setPassword} nick={nick} setNick={setNick} /> 
       }
          </Route>
          
          <Route path = '/my'>
            <My email ={email}/>
          </Route>
       
      
           
        
        </Switch>
       </Router>
       <Company01/>
    
    </Provider>
      </S.Container>
   
 
  </div>
 
   )
  
}


export default MyPage;


