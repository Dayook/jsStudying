const sandwich = {
    bread: "더치 크런치",
    meat: "참치",
    cheese: "스위스",
    topppings: ["상추", "토마토", "머스타드"]
  };
  
let {bread, meat} = sandwich;

bread = "마늘";
meat = "칠면조";

console.log(bread, meat);
console.log(sandwich.bread, sandwich.meat);


const lordify = ({firstname}) => {
    console.log(`캔터베리의 ${firstname}`)
};

const regularPerson = {
    firstname : "현석",
    lastname: "오",
    spouse: {
        firstname: "계영",
        lastname: "이"
    }
}

lordify(regularPerson); 

const lordify2 = ({ spouse: { firstname }}) => {
    console.log(`캔터베리의 ${firstname}`);
};

lordify2(regularPerson);


const [firstAnimal] = ["캥거루", "웜뱃", "코알라"]
console.log(firstAnimal);

const [,,thirdAnimal] = ["캥거루", "웜뱃", "코알라"]
console.log(thirdAnimal);