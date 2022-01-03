import React, {useState, memo} from 'react';
import Cat from './Cat';

const PureCat = memo(Cat);

const App = () =>{
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);


  return(
    <>
      {cats.map((name, i) => {
        return <PureCat key={i} name={name} onClick={name=> console.log(`${name} has meowed`)}/> // 함수 인스턴스는 매번 생성되어 memo 동작 안함.
      })}
      <button onClick={()=>setCats([...cats, prompt("Name a cat")])}> Add a Cat</button>
    </>
  )
}

export default App;
