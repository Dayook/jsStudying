import React from 'react';
import StarRating from './StarRating';
import { FaTrashAlert} from 'react-icons/fa';

export default function Color({ 
  id, 
  title, 
  color, 
  rating, 
  onRemove = f => f
}) {
  return(
    <section>
      <h1>{title}</h1>
        <button onClick={()=> onRemove(id)}>
          <FaTrashAlert />
        </button>
      <div style={{height: 50, backgroundColor: color}}/>
      <StarRating selectedStars={rating} />/
    </section>
  );
}