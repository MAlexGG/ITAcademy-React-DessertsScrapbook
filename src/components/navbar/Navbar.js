import React, { useState } from 'react';
import { BtNavbar, CtDropdownMenu, CtInlineMenu, CtMenu, CtNavbar, ImgNavbar, Logo, BtDropdownMenu, BtInlineMenu } from './Navbar.styled';
import chef from '../../assets/img/chef.svg';

export default function Navbar() {

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
        <Logo src={chef} alt='logo' />
        <CtMenu>
          <BtNavbar onClick={handleMenu}>
            <ImgNavbar src={chef} alt='menu bar'/>
          </BtNavbar>
          <CtDropdownMenu isVisible={isVisible}>
            <BtDropdownMenu>Log in</BtDropdownMenu>
            <BtDropdownMenu>Sign up</BtDropdownMenu>
          </CtDropdownMenu>
          <CtInlineMenu>
            <BtInlineMenu>Log in</BtInlineMenu>
            <div> | </div>
            <BtInlineMenu>Sign up</BtInlineMenu>
          </CtInlineMenu>  
        </CtMenu>
      </CtNavbar>
    </>
  )
}
