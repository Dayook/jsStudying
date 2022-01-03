const container = document.getElementById("container");
let div;

for (let i = 0; i < 5; i++) {
  div = document.createElement("div");

  div.onclick = function () {
    // console.log('isClicked?');
    alert("이것은 박스 #:" + i + "입니다.");
  };
  container.appendChild(div);
}
