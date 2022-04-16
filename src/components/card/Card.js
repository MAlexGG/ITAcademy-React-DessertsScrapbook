import React from 'react'
import { Link } from 'react-router-dom';
import { CtCard, CtImgCard, ImgCard, MoreButton, TxtCard } from './Card.styled';

export default function Card({dessert, index}) {
  return (
      <>
          <CtCard>
              <CtImgCard>
                  <ImgCard src={dessert.recipe.image} alt='dessert picture' />
              </CtImgCard>
              <TxtCard>{dessert.recipe.label}</TxtCard>
              <Link to={`/dessert/${index}`} state={{ dessert: dessert }} key={index}><MoreButton>+</MoreButton></Link>
          </CtCard>
      </>
  )
}

