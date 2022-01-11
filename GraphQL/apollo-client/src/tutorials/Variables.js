import { makeVar } from "@apollo/client";
/**
 * Reactive variables
 * - representing local state outside of Apollo Client cache.
 * 캐시에서 분리돼있으므로 reactive variables는 모든 종류의 type과 structure의 데이터를
 * 저장할 수 있으며
 * graphQL 구문을 사용하지 않고서도 언제든 앱과 interact할 수 있다.
 */

// Creating
const cartItemsVar = makeVar([]);
// This code creates a reactive varibale with an empty array as its initial value.
// The resturn value of makeVar is a function that you call to read or modifiy your reactive variable's value

// Reading

console.log(cartItemsVar());

cartItemsVar([100, 101, 102]);
console.log(cartItemsVar());


cartItemsVar([456]);
console.log(cartItemsVar());
