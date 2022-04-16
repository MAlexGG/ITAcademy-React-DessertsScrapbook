import React from 'react'
import { CtCard, CtImgCard, ImgCard, MoreButton, TxtCard } from './Card.styled';
import prueba from '../../assets/img/prueba.jpg';

export default function Card({dessert}) {
  return (
      <>
          <CtCard>
              <CtImgCard>
                  <ImgCard src={prueba} alt='dessert picture'/>
              </CtImgCard>
              <TxtCard>{dessert.recipe.label}</TxtCard>
              <MoreButton>+</MoreButton>
          </CtCard>
      </>
  )
}

