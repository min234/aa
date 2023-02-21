import React, {  useEffect, useState } from 'react';//lazy
import * as S from './style';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qq from './qq.png'
import { getAuth } from 'firebase/auth';



function Header({email,nick}:any) {
	const history = useHistory();

	const [click,setClick] = useState(0)
	const [demo,setDemo] = useState(0)
	
	const lo = () => {
		history.push('/')
		window.location.reload();
	}
	

    const handleAuthentication = () => {
        if(auth) {
           auth.signOut();
        }
    }
	const auth = getAuth();


	const user = useSelector((state: { user: any; }) => state.user.user) 
	const users = auth.currentUser;	

		return(
		<S.Wrapper>
			<div  className='container1'>
				
				<div className='header'>
					<div className='artnguide' onClick={lo}>ART N GUIDE</div>
					<div className='header-main'>
						<div className='od'>
						<div className={`one ${click === 1 ? "active" : ""}`} onClick={() => {setClick(1)}}>미술품 공동구매</div>
						<div className='drop'>
							<Link to = '/stikcy'>
							<div className={` stikcy ${demo === 1 ? "active" : ""}`} onClick={() => {setDemo(1)}}>stikcy</div>
							</Link>
							<div className={`demo1 ${demo === 2 ? "active" :""}`} onClick={() => {setDemo(2)}}>demo</div>
							<div className={`demo1 ${demo === 2 ? "active" :""}`} onClick={() => {setDemo(2)}}>demo</div>
						</div>
						</div>
						<div className={`two ${click === 2 ? "active" : ""}`} onClick={() => {setClick(2)}}>아트마켓</div>
						<div className={`three ${click === 3 ? "active" : ""}`} onClick={() => {setClick(3)}}>고객센터</div>
						<div className={`four ${click === 4 ? "active" : ""}`} onClick={() => {setClick(4)}}>ART N GUIDE LIVE</div>
					</div>
					<div className='header-last'>
						<Link to = '/login'>
						<span  className={`login ${user ? "active" : ""}`}>로그인</span>
						</Link>
						<div className={`logout1 ${user ? "active" : ""}`}>
							<div className='email'>{users?.displayName}</div> <img className='p' src={qq}></img>
							<div className='dropdown1'>
								<div className='logout' onClick={handleAuthentication}>로그아웃</div>
								<Link to = '/my'>
								<div className='my page'>마이 페이지</div>
								</Link>
							</div>
						</div>
					
						<div className='transform'>KOR
						<div className='dropdown'>
							<div className='kor'>KOR</div>
							<div className='ENG'>ENG</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</S.Wrapper >
		)
};

export default Header;
