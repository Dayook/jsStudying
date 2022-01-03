import React, { useEffect } from 'react';
// import RepositoryReadme from './RepositoryReadme';
import { useIterator } from './useIterator';

export function RepoMenu({
  repositories,
  selected,
  onSelect = f => f
}) {
  console.log('repositories 배열은: ', repositories);
  console.log('selected:', selected);
  console.log(repositories.findIndex(repo => repo.name === selected))
  const [{name}, previous, next] = useIterator(
    repositories,
    selected? repositories.findIndex(repo => repo.name === selected): null
  );

  useEffect(() => {
    if(!name) return;
    onSelect(name);
  }, [name])
  console.log(next);

  if(name){
    return(
    <>
      <div style={{display: "flex"}}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
    </>
  )}
  else{
    return null
  }
}

