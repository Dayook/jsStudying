import React, { useState, useEffect } from "react";
import GithubUser from "./Components/GitHubUser";
import GitHubUser from "./Components/GitHubUser";
import SearchForm from "./Components/SearchForm";
import UserRepositories from "./Components/UserRepositories";
import UseMemo from "./Components/UseMemo";
import UseRef from "./Components/UseRef";
const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default function App() {
  return <UseRef />;
  // const [login, setLogin] = useState("moonhighway");
  // const [repo, setRepo] = useState("backbone-chat");

  // const handleSearch = login => {
  //   if(login) {
  //     return setLogin(login)
  //   } else {
  //     setLogin('');
  //     setRepo('');
  //   }

  //   if(!login) {
  //     return (<SearchForm value={login} onSearch={handleSearch}/>);
  //   } else {
  //     return (
  //       <>
  //         <SearchForm value={login} onSearch={setLogin} />
  //         {login && <GithubUser login = {login} /> }
  //         {login && <UserRepositories
  //                   login = {login}
  //                   repo = {repo}
  //                   onSelect = {setRepo}></UserRepositories>}
  //       </>
  //     )
  //   }
  // }
}
