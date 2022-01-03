import React, {useState} from 'react';
import colorData from './data/color-data.json';
import ColorList from "./components/ColorList.js";
// import AddColorFormWithRef from './components/AddColorFormWithRef';
import AddColorForm from './components/AddColorForm';
import { v4 } from 'uuid';

export default function App() {
  const [colors, setColors] = useState(colorData);

  const onNewColor = (title, color) =>{
    const newColors = [
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }
    ];
    setColors(newColors);
  }
  return(
    <>
      <ColorList 
        colors={colors} 
        onRemoveColor={ id =>{
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
        onRateColor = {(id, rating) =>{
          const newColors = colors.map(color =>
            color.id === id ? {...color, rating}: color);
            setColors(newColors);
        }}
      />
      <AddColorForm 
        onNewColor={onNewColor}
      />
    </>  
  )
};


