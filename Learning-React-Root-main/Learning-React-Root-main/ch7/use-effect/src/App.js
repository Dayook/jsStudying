import React, { useEffect, useCallback, useState } from 'react';
// import Checkbox from './components/Checkbox';
// import DependencyArrayTest from './components/DependencyArrayTest'
import WordCount from './components/WordCount';
// import useAnyKeyToRender from './hooks/useAnyKeyToRender';

const App = () =>{
  
  const [words, setWords] = useState('You are not going to believe this but...');
  // const word = "gnar"; // 원시 값으로서의 word
  // const words = ['sick', 'powder', 'day']
  // useAnyKeyToRender();

  // useEffect(()=>{
  //   console.log('word fresh render');
  // }, [word]); // fresh render가 찍히지 않는다.

  // useEffect(()=>{
  //   console.log('words fresh render');
  // }, [words]); // 배열은 참조값, 매 렌더링마다 새로 생성한다.

  // useCallback example
  const fn = useCallback(() => {
    console.log("hello");
    console.log('world');
  }, []);
  
  useEffect(()=>{
    console.log('fresh render');
    fn();
  }, [fn]);

  return(
    // <Checkbox />
    // <DependencyArrayTest/>
    // <h1>Open the console</h1>
    <>
    <WordCount>
      {words}
    </WordCount>
    <button onClick={()=> setWords(prompt('typing words'))}>changing words</button>
    </>
  )
}

export default App;