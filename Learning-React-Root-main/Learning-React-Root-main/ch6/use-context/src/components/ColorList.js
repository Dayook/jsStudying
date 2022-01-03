import React from 'react';
import Color from './Color';
// import ColorContext from './';
import {useColors} from '../context/color-hooks';

export default function ColorList(){ // props 제거

  const {colors} = useColors(); // useColors 사용.

  if(!colors.length) return <div>표시할 색이 없습니다. (Add a Color)</div>;

  return (
    <div className="color-List">
      {
        colors.map(color => (
        <Color 
          key={color.id} 
          {...color} 
          // onRemove={onRemoveColor} 함수 제거
          // onRate={onRateColor}
        />))
      }
    </div>
  );
}