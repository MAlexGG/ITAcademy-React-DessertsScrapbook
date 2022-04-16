import React from 'react';
import { CtHome, Title, TxtHome } from './Home.styled';
import Navbar from '../../components/navbar/Navbar';
import Cards from '../../components/cards/Cards';

export default function Home() {
  return (
    <>
      <CtHome>
        <Navbar/>
        <Title>My Dessert Scrapbook</Title>
        <TxtHome>This is a personal collection of recepies I had found online</TxtHome>
        <Cards/>
      </CtHome>
    </>
  )
}
