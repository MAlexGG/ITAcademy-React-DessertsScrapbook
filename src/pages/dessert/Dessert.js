import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Dessert() {
  
  const location = useLocation();
  const { dessert } = location.state;
  return (
    <div>{dessert.recipe.label}</div>
  )
}
