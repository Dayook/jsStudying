import React, { useState, useEffect } from 'react';

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if (!uri) return;
    fetch(uri)
      .then(data => data.json(), 
      
      console.log("first"))
      .then(setData)
      .then(()=> setLoading(false), console.log("second"))
      .catch(setError, console.log("third"));
  }, [uri]);

  return {
    loading,
    data,
    error
  };
}