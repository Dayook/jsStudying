import React, { useState, useEffect } from 'react';

export default function Checkbox(){
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    alert(`checked: ${checked.toString()}`);
  }, [checked]);

  // alert(`checked: ${checked.toString()}`); // code blocking 역할, 렌더링 후의 상태를 반영하여 alert되지 않음

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={()=>setChecked(checked => !checked)}
      />
      {checked? "checked" : "not checked"}
    </>
  )

  alert(`checked: ${checked.toString()}`); // return 이후의 함수는 실행되지 않음...
}