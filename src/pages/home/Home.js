import React from 'react';
import { ATop, CtHome, Title, TxtHome } from './Home.styled';
import Navbar from '../../components/navbar/Navbar';
import Cards from '../../components/cards/Cards';

export default function Home() {
  return (
    <>
      <CtHome>
        <Navbar color='#2A0200' filter='invert(3%) sepia(68%) saturate(4790%) hue-rotate(6deg) brightness(98%) contrast(105%);'/>
        <Title>My Dessert Scrapbook</Title>
        <TxtHome>This is a personal collection of recepies I had found online</TxtHome>
        <Cards />
        <ATop href="#root">Up</ATop>
      </CtHome>
    </>
  )
}
