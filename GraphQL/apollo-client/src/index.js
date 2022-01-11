import React from "react";
import ReactDOM from "react-dom";
import Tutorial from "./tutorials/Tutorial";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  // InMemoryCache의 인스턴스. 데이터 당겨오면 이 캐시에 일단 저장됨
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result));

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}

function ExchangeRates() {
  // executes our GetExchangeRates query with the useQuery hook
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>Error: </p>;

  /**
   * whenever this component renders, the useQuery hook
   * automatically executes our query
   * returns a result obtaning loading, error, and data propeties
   *
   * Apollo client tracks a query's error and loading state for you
   * which are reflected in loading and error properties
   * When the result of your query comes back, it's attached to the data property
   */
  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency} : {rate}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DogPhoto />
      <ExchangeRates />
    </div>
  );
}

ReactDOM.render(
  /**
   * ApolloProvider => 리액트 앱을 Context로 감싸는 역할
   * 전역에서 client 객체에 접근할 수 있음
   * root DOM 트리를 감싸는 컨텍스트이기 때문에 전역에서 Apollo Client를 사용할 수 있다
   */
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
