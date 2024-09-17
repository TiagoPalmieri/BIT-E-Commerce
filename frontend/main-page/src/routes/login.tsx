/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react';
import { Fragment } from 'react';
import '../styles/login.css';
import axios from 'axios';
import macbook from  '../assets/macbook.png'

export default function Login(){

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  console.log(email);
  
  const request = {
    email: email,
    userPassword: password
  }

  axios.post('localhost:3000/api/v1/auth/register', request, {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': ''
    }
  })
    .then(response => {
      
      console.log('exito');
  })
    .catch(error => {
      console.error(error);
  });
  
  return (
    <Fragment>
      <body className='body-login'>  
        <div className='background'>
          <div className='leftPart'>
            <p id='Login'>Login</p>
            <form action="#" id='myForm'>
              <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <input type="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
              <button className="btn" type="submit"><a href="/main">Login</a></button>
            </form>
            <p>Do You already have an account?<a href="#">Sign up</a></p>
          </div>
          <div className='rightPart'>
            <img src={macbook} alt="MacBook" />
          </div>
        </div>
      </body>
    </Fragment>
  );
}