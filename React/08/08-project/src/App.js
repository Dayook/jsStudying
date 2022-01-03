import React, { useState, useEffect } from "react";
import GitHubUser from "./Components/GitHubUser"; 
import SearchForm from "./Components/SearchForm"; 
const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));



export default function App() {
  const [login, setLogin] = useState('moontahoe');
  return <><SearchForm value={login} onSearch={setLogin} /><GitHubUser login="moonhighway" />
  </>;
}