import React, { useState } from 'react';
import { BtNavbar, CtDropdownMenu, CtInlineMenu, CtMenu, CtNavbar, ImgNavbar, Logo, BtDropdownMenu, BtInlineMenu } from './Navbar.styled';
import chef from '../../assets/img/chef.svg';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(props) {

  const [isVisible, setIsVisible] = useState(false);

  let navigate = useNavigate();

  const handleMenu = () => {
    if (isVisible === false) {
      setIsVisible(true);
    } else if (isVisible === true) {
      setIsVisible(false);
    }
  };

  const logoutSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('form');
    alert('Log out successfully');
    navigate('/', { replace: true });
  };

  return (
    <>
      <CtNavbar>
        <Link to='/'><Logo src={chef} filter={props.filter} alt='logo' /></Link>
        <CtMenu>
          <BtNavbar onClick={handleMenu}>
            <ImgNavbar src={chef} alt='menu bar'/>
          </BtNavbar>
          <CtDropdownMenu isVisible={isVisible}>
            {
              localStorage.getItem('form')
                ?
                <BtDropdownMenu onClick={logoutSubmit}>Log out</BtDropdownMenu>
                :
                <>
                  <Link to='/login'><BtDropdownMenu>Log in</BtDropdownMenu></Link>
                  <Link to='/signup'><BtDropdownMenu>Sign up</BtDropdownMenu></Link>
                </>
            }
            <Link to='/'><BtDropdownMenu>Home</BtDropdownMenu></Link>
          </CtDropdownMenu>
          <CtInlineMenu color={props.color}>
            {
              localStorage.getItem('form')
                ?
                <BtInlineMenu onClick={logoutSubmit}>Log out</BtInlineMenu>
                :
                <>
                  <Link to='/login'><BtInlineMenu color={props.color}>Log in</BtInlineMenu></Link>
                  <div> | </div>
                  <Link to='/signup'><BtInlineMenu color={props.color}>Sign up</BtInlineMenu></Link>
                </>
            }
          </CtInlineMenu>  
        </CtMenu>
      </CtNavbar>
    </>
  )
}
