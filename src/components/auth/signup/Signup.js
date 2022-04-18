import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../../application/useLocalStorage';
import Navbar from '../../navbar/Navbar';
import { BtForm, CtButtonsForm, CtSignup, CtSignupForm, InputSignup, TxtSignupTitle } from './Signup.styled';

export default function Signup() {

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
    navigate('/', { replace: true });
  };
  
  const handleReset = () => {
    localStorage.removeItem('form');
    navigate('/', { replace: true });
  };


  return (
      <>
          <CtSignup>
              <Navbar color='#FAEBE5' filter='invert(94%) sepia(5%) saturate(533%) hue-rotate(329deg) brightness(100%) contrast(96%)' />
              <TxtSignupTitle>Fill the form for Sign-up</TxtSignupTitle>
              <CtSignupForm onSubmit={handleSubmit}>
                  <InputSignup type='text' placeholder='Name...' name='name' required onChange={handleChange}/>
                  <InputSignup type='mail' placeholder='Mail...' name='mail' required onChange={handleChange}/>
                  <InputSignup type='password' placeholder='Password...' name='password' required onChange={handleChange}/>
                <CtButtonsForm>
                  <BtForm type='submit'>Sign up</BtForm>
                  <BtForm type='reset' onClick={handleReset}>Cancel</BtForm>
                </CtButtonsForm>
              </CtSignupForm>
              
          </CtSignup>
      
      </>
  )
}
