import React from 'react'
import { CtCard, CtImgCard, ImgCard, MoreButton, TxtCard } from './Card.styled';
import prueba from '../../assets/img/prueba.jpg';

export default function Card() {
  return (
      <>
          <CtCard>
              <CtImgCard>
                  <ImgCard src={prueba} alt='dessert picture'/>
              </CtImgCard>
              <TxtCard>Dessert name</TxtCard>
              <MoreButton>+</MoreButton>
          </CtCard>
      </>
  )
}

