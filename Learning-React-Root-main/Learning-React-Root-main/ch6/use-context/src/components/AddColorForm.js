import React from 'react';
import useInput  from '../hooks/useInput.js';
import { useColors } from '../context/color-hooks.js';

export default function AddColorForm() { // props 제거
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const {addColor} = useColors();

  const submit = e =>{
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetColor();
    resetTitle();
  };

  return(
    <form onSubmit={submit}>
      <input type="text"
        {...titleProps}
        placeholder="color title..."
        required
      />
      <input type="color"
        {...colorProps}
        required
      />
      <button>ADD</button>
    </form>
  )
}