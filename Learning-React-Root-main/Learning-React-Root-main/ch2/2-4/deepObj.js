const regularPerson = {
  firstname: "현석",
  lastname: "오",
  spouse: {
    firstname: "계영",
    lastname: "이",
  }
};

const lordify = ({spouse: {firstname}}) =>{
  console.log(`켄터베리의 ${firstname}`);
}

lordify(regularPerson);