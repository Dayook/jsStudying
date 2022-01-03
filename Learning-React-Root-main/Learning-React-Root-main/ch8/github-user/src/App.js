import React, { useState } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';
import UserRepositories from './components/UserRepositories';
import RepositoryReadme from './components/RepositoryReadme';

export default function App(){
  console.log("App() render");
  const [login, setLogin] = useState("moonhighway");
  const [repo, setRepo] = useState("backbone-chat");

  const handleSearch = login =>{
    if (login) return setLogin(login);
    setLogin('');
    setRepo('');
  }

  if(!login)
    return (<SearchForm value={login} onSearch={handleSearch} />);
  
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login}/>}
      { login && <UserRepositories
        login={login}
        repo={repo}
        onSelect={setRepo}
      />}
      {/*
      user 와 repo 설정이 완료되면 RepositoryReadme를 불러온다
      */}
      {login && repo &&<RepositoryReadme login={login} repo={repo} />}
    </>
  );
}
