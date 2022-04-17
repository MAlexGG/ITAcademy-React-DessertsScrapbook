import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { BtForm, CtButtonsForm, CtLogin, CtLoginForm, InputLogin, TxtLoginTitle } from './Login.styled';

export default function Login() {
  return (
      <>
          <CtLogin>
              <Navbar color='#FAEBE5' filter='invert(94%) sepia(5%) saturate(533%) hue-rotate(329deg) brightness(100%) contrast(96%)' />
              <TxtLoginTitle>Fill the form for log-in</TxtLoginTitle>
              <CtLoginForm>
                  <InputLogin type='mail' placeholder='Mail...' name='mail' required />
                  <InputLogin type='password' placeholder='Password...' name='password' required />
                <CtButtonsForm>
                  <BtForm>Log in</BtForm>
                  <Link to='/'><BtForm>Cancel</BtForm></Link>
                </CtButtonsForm>
              </CtLoginForm>
              
          </CtLogin>
      
      </>
  )
}
