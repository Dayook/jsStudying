/* /chapter05/mongoose/app.js */

const mongoose = require("mongoose");

/* Connecting */
mongoose
  .connect("mongodb://127.0.0.1:27017/roadbook", {
    //MongoDB 데이터베이스와 연결
    useNewUrlParser: true,
    //useCreateIndex: true //더이상 지원하지 않는 옵션. 삭제할 것.
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

/* Defining Schema */
const customerSchema = mongoose.Schema(
  {
    //스키마 정의
    name: "string",
    age: "number",
    sex: "string",
  },
  {
    collection: "newCustomer", //컬렉션 이름 지정
  }
);

/* Schema -> Model */
const Customer = mongoose.model("Schema", customerSchema); //스키마 -> 모델:스키마 정의로부터 컴파일된 생성자 변환

/* Generate Instance : Create*/
const customer1 = new Customer({ name: "홍길동", age: 30, sex: "남" }); //모델로 인스턴스(===document) 생성

/* Save Data into MongoDB */
customer1
  .save() //인스턴스 저장
  .then(() => {
    console.log(customer1);
  })
  .catch((err) => {
    console.log("Error :" + err);
  });
