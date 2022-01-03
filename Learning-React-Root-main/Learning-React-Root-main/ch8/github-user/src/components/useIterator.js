import { useCallback, useState, useMemo } from "react";

export const useIterator = (
  items=[],
  initialIndex = 0
) => {
  const [i, setIndex] = useState(initialIndex);
  console.log(`현재 i값은: ${i}`);
  console.log(items);

  const prev = useCallback(() => {
    if (i===0) return setIndex (items.length -1);
    setIndex(i-1);
  }, [i]);

  const next = useCallback(() =>{
    console.log("next");
    if (i === items.length -1) return setIndex(0);
    setIndex(i+1);
  }, [i]);

  const item = useMemo(()=> items[i], [i]);
  console.log(item || items[i]);
//  return ((item || items[i]), prev, next);
  if(item){
    console.log("item 있음");  
    return [items[i], prev, next];
  } else {
    console.log("item 없음");  
    return [items[0], prev, next];
  }
};