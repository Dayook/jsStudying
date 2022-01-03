import logo from './logo.svg';
import './App.css';
import useAnyKeyToRender from './hooks/useAnyKeyToRender';
import WordCount from './components/wordCount';
import { useEffect, useState } from 'react';
import Cat from './components/Cat';

const App = () =>{
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);


  return(
    <>
      {cats.map((name, i) => (
        <Cat key={i} name={name} /> // memo를 사용하여 프롭스 값이 변경 시에만 재렌더링 됨.
      ))}
      <button onClick={()=>setCats([...cats, prompt("Name a cat")])}> Add a Cat</button>
    </>
  )
}

export default App;
