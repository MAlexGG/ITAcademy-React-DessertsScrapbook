import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { BtForm, CtButtonsForm, CtSignup, CtSignupForm, InputSignup, TxtSignupTitle } from './Signup.styled';

export default function Signup() {
  return (
      <>
          <CtSignup>
              <Navbar color='#FAEBE5' filter='invert(94%) sepia(5%) saturate(533%) hue-rotate(329deg) brightness(100%) contrast(96%)' />
              <TxtSignupTitle>Fill the form for Sign-up</TxtSignupTitle>
              <CtSignupForm>
                  <InputSignup type='text' placeholder='Name...' name='name' required />
                  <InputSignup type='mail' placeholder='Mail...' name='mail' required />
                  <InputSignup type='password' placeholder='Password...' name='password' required />
                <CtButtonsForm>
                  <BtForm>Sign up</BtForm>
                  <Link to='/'><BtForm>Cancel</BtForm></Link>
                </CtButtonsForm>
              </CtSignupForm>
              
          </CtSignup>
      
      </>
  )
}
