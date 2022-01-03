import React, { useState } from 'react';

const SearchForm = ({value, onSearch= f=>f}) =>{
  
  const [input, setInput] = useState(value); // 책에 따로 코드가 없어서 직접 구현... 
  // value를 객체화 해서 상태값을 두개로 만드는게 더 나을거 같습니다.

  const submit = e => {
    e.preventDefault();
    onSearch(input);
  }
  
  return(
    <form onSubmit={submit}>
      <input type="text"
        placeholder="type User ID..."
        required
        value={input}
        onChange={e=>setInput(e.target.value)}
      />
      <button>Search</button>
    </form>
  )
}

export default SearchForm;