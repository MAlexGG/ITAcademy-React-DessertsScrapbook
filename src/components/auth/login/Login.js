import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../../application/useLocalStorage';
import Navbar from '../../navbar/Navbar';
import { BtForm, CtButtonsForm, CtLogin, CtLoginForm, InputLogin, TxtLoginTitle } from './Login.styled';

export default function Login() {

  const [form, setForm] = useLocalStorage('form', []);

  let navigate = useNavigate();

  const handleChange = (e) => {
    e.persist();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = () => {
    navigate('/', { replace: true })
  };

  const handleReset = () => {
    localStorage.removeItem('form');
    navigate('/', { replace: true });
  };
  

  return (
      <>
          <CtLogin>
              <Navbar color='#FAEBE5' filter='invert(94%) sepia(5%) saturate(533%) hue-rotate(329deg) brightness(100%) contrast(96%)' />
              <TxtLoginTitle>Fill the form for log-in</TxtLoginTitle>
              <CtLoginForm onSubmit={handleSubmit}>
                  <InputLogin type='mail' placeholder='Mail...' name='mail' required onChange={handleChange}/>
                  <InputLogin type='password' placeholder='Password...' name='password' required onChange={handleChange}/>
                <CtButtonsForm>
                  <BtForm type='submit'>Log in</BtForm>
                  <BtForm type='reset' onClick={handleReset}>Cancel</BtForm>
                </CtButtonsForm>
              </CtLoginForm>
          </CtLogin>
      </>
  )
}
