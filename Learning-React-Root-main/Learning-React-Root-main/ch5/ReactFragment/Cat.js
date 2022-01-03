import ReactDOM from 'react-dom';
import React from 'react';

function Cat({name}){
  return(
    <h1>고양이 이름은 {name} 입니다.</h1>
    <p>이 고양이는 멋져요.</p>
  );
}

ReactDOM.rentder(<Cat name="나비" />, document.getElementById("root"));