import React, {useEffect, useMemo} from 'react';
import useAnyKeyToRender from '../hooks/useAnyKeyToRender';

const WordCount = ({children=""}) =>{
  
  const words = useMemo(()=>{
    const words = children.split(" ");
    return words
  }, []);
  

  useAnyKeyToRender();

  useEffect(()=>{
    console.log("words fresh render");
  }, [words]);

  return(
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>  
  )
}

export default WordCount;