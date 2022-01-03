import React, {useState, useEffect} from 'react';


const DependencyArrayTest = () =>{

  const [val, set] = useState('');
  const [phrase, setPharase] = useState('example phrase');

  const createPhrase = () =>{
    setPharase(val);
    set('');
  };

  useEffect(()=>{
    console.log(`typing ${val}`);
  }, [val]); // 의존 관계 배열 추가

  useEffect(()=>{
    console.log(`saved phrase ${phrase}`);
  }, [phrase]); // 의존 관계 배열 추가

  useEffect(()=>{
    console.log('either val or phrase has changed');
  }, [val, phrase]); // 둘다 저장될 경우 실행 => button 클릭시 val 초기화 및 phrase 변경.

  useEffect(()=>{
    console.log('welcoming message!');
  }, []) // 의존 관계 배열에 아무것도 없으면 첫 렌더링만 실행

  return(
    <>
      <label>Favorite phrase</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e=> set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}

export default DependencyArrayTest;