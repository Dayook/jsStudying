import React from 'react';
// import colorData from './data/color-data.json';
import ColorList from "./components/ColorList.js";
// import AddColorFormWithRef from './components/AddColorFormWithRef';
import AddColorForm from './components/AddColorForm.js';


export default function App() {
  
  return(
    <>
      <AddColorForm />
      <ColorList />
    </>
  )
};
