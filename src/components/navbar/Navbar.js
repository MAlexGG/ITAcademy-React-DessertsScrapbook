import React, { useState } from 'react';
import { BtNavbar, CtDropdownMenu, CtInlineMenu, CtMenu, CtNavbar, ImgNavbar, Logo, BtDropdownMenu, BtInlineMenu } from './Navbar.styled';
import chef from '../../assets/img/chef.svg';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const [isVisible, setIsVisible] = useState(false);

  const handleMenu = () => {
    if (isVisible === false) {
      setIsVisible(true);
    } else if (isVisible === true) {
      setIsVisible(false);
    }
  }

  return (
    <>
      <CtNavbar>
        <Link to='/'><Logo src={chef} filter={props.filter} alt='logo' /></Link>
        <CtMenu>
          <BtNavbar onClick={handleMenu}>
            <ImgNavbar src={chef} alt='menu bar'/>
          </BtNavbar>
          <CtDropdownMenu isVisible={isVisible}>
            <BtDropdownMenu>Log in</BtDropdownMenu>
            <BtDropdownMenu>Sign up</BtDropdownMenu>
            <Link to='/'><BtDropdownMenu>Home</BtDropdownMenu></Link>
          </CtDropdownMenu>
          <CtInlineMenu color={props.color}>
            <BtInlineMenu color={props.color}>Log in</BtInlineMenu>
            <div> | </div>
            <BtInlineMenu color={props.color}>Sign up</BtInlineMenu>
          </CtInlineMenu>  
        </CtMenu>
      </CtNavbar>
    </>
  )
}
