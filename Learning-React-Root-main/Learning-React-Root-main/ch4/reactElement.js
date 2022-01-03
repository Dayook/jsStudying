// React Element 구현

React.createElement(
  "ul",
  null,
  React.createElement("li", null, "연어 900 그램"),
  React.createElement("li", null, "신선한 로즈마리 5 가지"),
  React.createElement("li", null, "올리브 오일 2 테이블스푼"),
  React.createElement("li", null, "작은 레몬 2 조각"),
  React.createElement("li", null, "코셔 소금 1 티스푼"),
  React.createElement("li", null, "다진 마늘 4 쪽")
);

{
	"type": "ul",
	"props": {
    "children": [
      { "type": "li", "props": { "children": "연어 900 그램"} },
      { "type": "li", "props": { "children": "신선한 로즈마리 5 가지"} },
      { "type": "li", "props": { "children": "올리브 오일 2 테이블스푼"} },
      { "type": "li", "props": { "children": "작은 레몬 2 조각"} },
      { "type": "li", "props": { "children": "코셔 소금 1 티스푼"} },
      { "type": "li", "props": { "children": "다진 마늘 4 쪽"} },
    ]
	}
}

const secretIngredients = [
  "무염 버터 1 컵",
  "크런치 땅콩 버터 1 컵",
  "흑설탕 1 컵",
  "백설탕 1 컵",
  "달걀 2 개",
  "일반 빌가루 2.5 컵",
  "베이킹 소다 1 티스푼",
  "소금 0.5 티스푼"
];

function IngredientsList(){
  return React.createElement(
    "ul",
    { className: "ingredients"},
    items.map((ingredient, i)=>
    React.createElement("li", {key: i}, ingredient)
    )
  );
}

ReactDOM.render(
  React.createElement(IngredientsList, {items: secretIngredients}, null),
  document.getElementById("root")
)

<IngredientList items="[...]">
	<ul className="ingredients">
    <li key="0">무염 버터 1 컵</li>
    <li key="1">크런치 땅콩 버터 1 컵</li>
    <li key="2">흑설탕 1 컵</li>
    <li key="3">백설탕 1 컵</li>
    <li key="4">달걀 2 개</li>
    <li key="5">일반 빌가루 2.5 컵</li>
    <li key="6">베이킹 소다 1 티스푼</li>
    <li key="7">소금 0.5 티스푼</li>
	</ul>
</IngredientsList>