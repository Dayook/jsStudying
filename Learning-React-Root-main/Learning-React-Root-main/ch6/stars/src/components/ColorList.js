import React from 'react';
import Color from './Color';

export default function ColorList({
  colors = [], 
  onRemoveColor = f =>f,
  onRateColor = f => f,
}){
  if(!colors.length) return <div>표시할 색이 없습니다. (Add a Color)</div>;

  return (
    <div className="color-List">
      {
        colors.map(color => (
        <Color 
          key={color.id} 
          {...color} 
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />))
      }
    </div>
  );
}