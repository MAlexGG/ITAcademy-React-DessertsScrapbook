import React from 'react';
import { useLocation } from 'react-router-dom';
import { BtStart, CtDessert, CtImgDessert, CtInfo, CtText, ImgDessert, TxtDessertTitle, TxtIngredient, TxtIngredients } from './Dessert.styled';
import Navbar from '../../components/navbar/Navbar';

export default function Dessert() {
  
  const location = useLocation();
  const { dessert } = location.state;

  return (
    <>
      <CtDessert>
        <Navbar color='#FAEBE5' filter='invert(94%) sepia(5%) saturate(533%) hue-rotate(329deg) brightness(100%) contrast(96%)' />
        <TxtDessertTitle>{dessert.recipe.label}</TxtDessertTitle>
        <CtInfo>
          <CtImgDessert>
            <ImgDessert src={dessert.recipe.image}/>
          </CtImgDessert>
          <CtText>
            <TxtIngredients> Ingredients:
              { 
                dessert.recipe.ingredientLines.map(((ingredient, index) => (
                  <TxtIngredient key={index}>{ingredient}</TxtIngredient>
                )))
              }
            </TxtIngredients>
            <TxtIngredients> Cuisine Type:
              {
                dessert.recipe.cuisineType.map((type, index) => (
                  <TxtIngredient key={index}>{type}</TxtIngredient>
                ))
              }
            </TxtIngredients>
            <BtStart onClick={()=>window.open(dessert.recipe.url, "_blank")}>Start Cooking</BtStart>
          </CtText>
        </CtInfo>
      </CtDessert>
    </>
  )
}
