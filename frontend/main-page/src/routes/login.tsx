/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect, FormEvent} from 'react';
import { Fragment } from 'react';
import '../styles/login.css';
import axios from 'axios';
import macbook from  '../assets/macbook.png'
import SnackBars from '../components/snackbar';

export default function Login(){

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const request = {
      email: email,
      userPassword: password
    };

    try {
      // Asegúrate de incluir el protocolo en la URL
      const response = await axios.post('http://10.160.19.98:3000/api/v1/auth/login', request, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ''
        }
      });

      console.log('Éxito');
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
        window.location.href = '/main';
      }, 3000);
      console.log(response.data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError('No se pudo completar la solicitud. Verifica tus credenciales e inténtalo de nuevo.');
    }
  };
  
  return(
    <Fragment>
        <div className='background'>
          <div className='leftPart'>
            <p id='Login'>Login</p>
          {error && <p className="error">{error}</p>}
            <form action="#" id='myForm' onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <input type="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="btn" type="submit">Login</button>
            </form>
            <p>Do You already have an account?<a href="#">Sign up</a></p>
          </div>
          <div className='rightPart'>
            <img src={macbook} alt="MacBook" />
          </div>
        </div>
        {showSnackbar && (
          <SnackBars></SnackBars>
        )}
    </Fragment>
  );
}