import React from 'react';
import Star from './Star';

const createArray = length => [...Array(length)];

export default function StarRating({
  totalStars = 5, 
  selectedStars = 0,
  onRate = f => f
}) {
  // const [selectedStars, setSelectedStars] = useState(3);

  return (
    <>
      {createArray(totalStars).map((n,i) => 
        <Star 
          key={i} 
          selected={selectedStars > i }
          onSelect = { ()=> onRate(i+1)}
        />)}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}