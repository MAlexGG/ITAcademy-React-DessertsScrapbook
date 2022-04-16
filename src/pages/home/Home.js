import React from 'react';
import { BtSearch, CtHome, CtSearch, ImgSearch, InputSearch, Title, TxtHome } from './Home.styled';
import search from '../../assets/img/search.svg';
import Navbar from '../../components/navbar/Navbar';
import Cards from '../../components/cards/Cards';

export default function Home() {
  return (
    <>
      <CtHome>
        <Navbar/>
        <Title>My Dessert Scrapbook</Title>
        <TxtHome>This is a personal collection of recepies I had found online</TxtHome>
        <CtSearch>
          <InputSearch placeholder='search...' />
          <BtSearch>
            <ImgSearch src={search} alt='search button'/>
          </BtSearch>
        </CtSearch>
        <Cards/>
      </CtHome>
    </>
  )
}
