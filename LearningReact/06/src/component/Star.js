import React from "react";
import { FaStar } from "react-icons/fa"

/**
 * onSelect Property 추가.
 * 사용자가 FaStar 컴포넌트를 클릭하면 이 함수를 호출함.
 * f => f는 가짜 함수이지만 함수이긴 하기에 오류 없이 호출됨.
 
 */
const Star = ({ selected = false, onSelect = f => f }) => {
    return <FaStar color = {selected ? "red" : "grey"} onClick={onSelect} />
}

export default Star;