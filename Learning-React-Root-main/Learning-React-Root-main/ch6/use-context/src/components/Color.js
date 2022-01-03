import React from 'react';
import StarRating from './StarRating';
import {FaTrashAlt} from 'react-icons/fa';
import { useColors } from '../context/color-hooks';

export default function Color({id, title, color, rating}) { 

  const {rateColor, removeColor} = useColors(); // useColors안에 rateColor, removeColor가 있나??
  // ColorProvider에서 제공하는걸 useContext에서도 제공하나?

  return(
    <section>
      <h1>{title}</h1>
        <button onClick={()=> removeColor(id)}>
          <FaTrashAlt />
        </button>
      <div style={{height: 50, backgroundColor: color}}/>
      <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)}/>/
    </section>
  )
}