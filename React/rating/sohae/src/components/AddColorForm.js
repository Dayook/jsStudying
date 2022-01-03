import React, { useState } from 'react';

export default function AddColorForm({ onNewColor = f => f}) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = e =>{
    e.preventDefault();
    onNewColor(title, color);
    setColor('');
    setTitle('');
  };

  return(
    <form onSubmit={submit}>
      <input 
				type="text"
        onChange={e => setTitle(e.target.value)}
        placeholder="color title..."
        required
      />
      <input 
				type="color"
        onChange={e=> setColor(e.target.value)}
        required
      />
      <button>ADD</button>
    </form>
  )
}