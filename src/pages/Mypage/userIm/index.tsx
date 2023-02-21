import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import { auth, firebaseAuth } from '../../../firebase_config'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'counter/counterSlice';
import { any } from 'prop-types';


function Index({email,setEmail,password,setPassword,nick,setNick}:any) {
    const [errorMsg, setErrorMsg] = useState("");
    
    const history = useHistory();

    const dispatch = useDispatch();
    const users = auth.currentUser
   
    const register = async () => {
   
        try {
          setErrorMsg('');
          const createdUser = await createUserWithEmailAndPassword(auth, email, password  )
          .then (async userCredential => {
            await updateProfile(userCredential.user, {displayName : nick} );
          })
        
          console.log(createdUser);
          dispatch((
            login({ 
              user: nick,
            })
          ))
      
          setEmail("");
          setPassword("");
          setNick("")
          history.push('/');
        } catch(err :any){
          //console.log(err.code);
          switch (err.code) {
            case 'auth/weak-password':
              setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
              break;
            case 'auth/invalid-email':
              setErrorMsg('잘못된 이메일 주소입니다');
              break;
            case 'auth/email-already-in-use':
              setErrorMsg('이미 가입되어 있는 계정입니다');
              break;
          }

        }
       
      }
     
 

  return (
    <S.Container>
        <div className="g-b">
            <div className='g-w'>
                <div className='g-t'>MEMBER REGISTER</div>
                <div className='g-c'>아트앤가이드의 다양한 서비스를 이용하시려면 회원가입을 해주세요.</div>
                <div className='g-input2'>
                    <div>
                    <div className='id'>아이디 </div>
                    <input type = 'text'  className='i'></input>
                    </div>
                    <div>
                    <div className='name'>성명</div>
                    <input type = 'text' value={nick} onChange={e => setNick(e.target.value)} className='i'></input>
                </div>
                </div>
                <div className='g-input2'>
                    <div>
                    <div className='email'>이메일</div>
                    <input type = 'text'  value={email}   onChange=
                        {e => setEmail(e.target.value)} className='i'></input>
                    </div>
                  <div>
                  <div className='phone'>휴대폰</div>
                    <input type = 'text' className='i'></input>
                  </div>
                    
                </div>
                <div className='g-input2'>
                    <div>
                    <div className='password'>비밀번호</div>
                    <input type = 'text'value={password} onChange
                        ={e => setPassword(e.target.value)}  className='i'></input>
                    </div>
                   <div>
                   <div className='rpassword'>비밀번호 확인</div>
                    <input type = 'text' className='i'></input>
                   </div>
                   
                </div>
              
                 <div className='g-input2'>
                    <div ><div className='email'>생년월일</div>
                    <input type = 'text' placeholder='YYYY/MM/DD' className='i'></input></div>
                    
                </div>
                <div className='line'></div>
                <div className='adress'>주소</div>
                <button type='button' className='adress-btn'>우편번호 검색</button>
                <div className='g-input2'>
                <input type = 'text' className='i2' ></input>
                <input type = 'text' className='i3' ></input>
                </div>
                <input type ='text' className='ii' placeholder='나머지주소 입력'></input>
                <div className='account'>계좌 정보</div>
                <div className='g-input2'>
                    <div>
                        <div className='me'>입금자</div>
                        <input type = 'text' className='i' ></input>
                    </div>
                    <div>
                        <div className='bank-name'>은행명</div>
                        <input type = 'text' className='i' ></input>
                    </div>
                </div>
                <div className='g-input2'>
                    <div>
                        <div className='number'>계좌번호</div>
                        <input type='text' className='ii'></input>
                    </div>
                </div>
                <div className='add'>추가 정보</div>
                <div className='g-input2'>
                    <div>
                     
                        <input type='checkbox' className='one'></input>
                        <label className='h'>소득공제(현금영수증 발행)</label>
                        <input type='text' className='i' ></input>
                    </div>
                    <div>
                        <input type='checkbox' className='one'></input>
                        <label className='h'>사업자지출증빙</label>
                        <input type='text' className='i' ></input>
                        </div>
                      
                    </div>
                    <button type='submit' className='ok' onClick={register}>가입하기</button>
                    </div>
                    <div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index



