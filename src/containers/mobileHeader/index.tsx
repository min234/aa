import React, { useState } from 'react'
import {MenuOutlined} from '@ant-design/icons'
import * as S from './style'
import { Link, useHistory } from 'react-router-dom'
import { auth } from 'firebase_config';
import { useSelector } from 'react-redux';
import qq from './qq.png'

function Index({email,nick}:any) {
    const [isOpen,  setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }
    
  
      const handleAuthentication = () => {
          if(auth) {
             auth.signOut();
          }
      }

    const history = useHistory();

    const lo = () => {
    
    console.log("link clicked");
		history.push('/')
		window.location.reload();

    }
    
	const user = useSelector((state: { user: any; }) => state.user.user) 
	const users = auth.currentUser;	

  return (
    <S.Container>
        <div className="bgz">
            <div className="title" onClick={lo}>ART N GUIDE</div>
            <MenuOutlined onClick={()=>toggleMenu()}/>
            <ul className={isOpen ? "show-menu" : "hide-menu"}>
              <div className="flex">
            <div className="Anna">{users?.displayName}
            <div className='email'>{users?.displayName}</div> <img className='p' src={qq}></img>
            </div>
            </div> 
                      <div className='a'>미술품 공동구매</div>
                      <div className='b'>아트마켓</div>
                      <div className='c'>고객센터</div>
                      <div className='d'>마이페이지</div>
                      <div className='e'>ART N GUIDE LIVE</div>
                      <Link to = '/login'>
						<span  className={`login ${user ? "active" : ""}`}>로그인</span>
						</Link>
            <div className={`logout ${user ? "active" : ""}`} onClick={handleAuthentication}>로그아웃</div>
                </ul>
        </div>
    </S.Container>
  )
}

export default Index