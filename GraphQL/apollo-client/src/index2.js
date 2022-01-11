import { split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { ApolloClient, InMemoryCache } from "@apollo/client";

// ...code from the above example goes here...

/**
 * Split Communicaiton by Operation(Recommended)
 *
 * Although Apollo Clinet can use your WebSocketLink
 * to execute all operation types, in most cases it should continue using HTTP
 * for queries and mutations.
 *
 * This is because queries and mutations don't require a stateful
 * or long-lasting connection, making HTTP more efficient and scalable
 * if a WebSocket connection isn't already present
 *
 * To support this, apollo client provides a split function
 * that lets you use one of two different Links, according to
 * the result of a boolean check.
 *
 * The following example exapnds on the previous one by
 * initializing both a WebSocketLink and HttpLink.
 * It then uses the split function to combine those two Links into a single Link
 * that usese one or the other
 */

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const wsLink = new WebSocketLink({
  // ws로 시작하는 subscription 전용 엔드포인트를 넣어줘야 함
  uri: "ws://localhost:4000/subscriptions",
  options: {
    reconnect: true,
  },
});

/**
 * The split function takes three parameteres;
 *
 * A function that's called for each operation to execute=
 * The Link to use for an operation if the function returns a "trusty" value
 * The Link to use for an operation if the function returns a "false" value
 */

const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === "OperationDefifnition" &&
    definition.operation === "subscription"
  );
});

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
