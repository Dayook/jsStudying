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
  }, [val]);

  useEffect(()=>{
    console.log(`saved phrase ${phrase}`);
  }, [phrase]);

  useEffect(() => {
      console.log('either val or phrase has changed');
  }, [val, phrase]);

  useEffect(() => {
      console.log('welcoming message!');
  })

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