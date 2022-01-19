import { useRef } from "react";
import domtoimage from "dom-to-image";

const TestComponent = (props) => {
  const { id, nickName } = props;
  const personInfo = useRef();

  const onClick = function ()
    domtoimage.toPng(personInfo.current).then(function (blob) {
      window.saveAs(blob, "user-card.png");
    });
  };

  return (
    <>
      <div className="box" ref={personInfo}>
        <p>
          {" "}
          {id} - {nickName} 테스트 영억
        </p>
      </div>{" "}
      <button onClick={onClick}>저장</button>
    </>
  );
};

export default TestComponent;
