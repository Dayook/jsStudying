/**
 * resolver: 특정 필드의 데이터를 반환하는 함수
 * 스키마에 정의된 타입과 형태에 따라 데이터를 반환함.
 * 비동기로 작성할 수 있으며 ...  데이터를 가져오거나 업데이트 작업 할 수 있음
 */

const express = require("express");
const { ApolloServer, gql } = require("apollo-server");

const typeDefss = `
    type Query {
        totalPhotos: Int! 
    }
`;

const typeDefs = gql`
  enum PhotoCategory {
    SELFIE
    PORTRAIT
    ACTION
    LANDSCAPE
    GRAPHIC
  }

  type Photo {
    id: ID!
    url: String!
    name: String!
    description: String
    category: PhotoCategory!
  }

  input PostPhotoInput {
    name: String!
    category: PhotoCategory = PORTRAIT
    description: String
  }

  type Query {
    totalPhotos: Int!
    # allphotos에서 photo 타입을 반환한다
    allPhotos: [Photo!]!
  }

  type Mutation {
    # String타입인 name과 description을 인자로 받으며, 요청 후에 Boolean을 반환함
    #postPhoto(name: String!, description: String): Photo!
    postPhoto(input: PostPhotoInput!): Photo!
  }
`;

// 메모리에 데이터 저장할 때 사용할 데이터 타입
var _id = 0;
var photos = [];

const resolvers = {
  Query: {
    // 사진의 배열 길이를 반환합니다.
    totalPhotos: () => photos.length,
    allPhotos: () => photos,
  },

  Mutation: {
    // 부모 객체를 가리키는 참조를 첫 번째 인자로 넘긴다
    // parent를 첫 번째 인자로 넣어, 두 번째 인자를 사용할 수 있도록 만듦
    // args: 뮤테이션에 사용할 graphQL 인자
    // name은 필수값, description은 옵션. args 변수는 필드가 두 개 들어있는 객체.

    /**
     * postPhoto 리졸버는 변수의 값을 증가시켜 ID를 만든다
     * args 변수는 사진의 name과 description 필드를 받는다
     * ID 값 역시 새로운 사진 정보로 들어간다
     *
     */

    postPhoto(parent, args) {
      var newPhoto = {
        id: _id++,
        ...args.input,
      };
      photos.push(newPhoto);
      return newPhoto;
    },
  },
  // url은 자동으로 생성되기 때문에 직접 저장할 필요가 없다.
  /**
   * 사진 URL 리졸버를 사용하기 때문에 Photo 객체를 리졸버에 추가하였다.
   * Photo 객체의 url 필드 문제를 해결하기 위해 활용.
   * 쿼리에 url이 있다면 해당 리졸버 함수가 호출됨.
   * 함수에 전달되는 첫 번째 인자는 언제나 parent 객체이다.
   * 이 경우 리졸빙 대상인 photo 객체가 parent가 된다
   *
   * 별표
   * GraphQL 스키마 정의는 곧 애플리케이션 요구 사항 정의와 같다.
   * resolver를 사용한다면 요구 사항에 얼마든지 유연하게 대처할 수 있다.
   *
   */
  Photo: {
    url: (parent) => `http://yoursite.com/img/${parent.id}.jpg`,
  },
};

/** totalPhotos 같은 쿼리를 작성하려면, 쿼리와 같은 이름을 가진 resolver 필수임
 * 타입 정의하는 곳에는 필드에서 반환하는 데이터 타입을 적음
 * 그러면 리졸버 함수가 그 타입에 맞는 데이터를 어딘가에서 가져다가 반환해줌 (멋있다;;)
 * resolver는 그래프큐엘 구현의 핵심임.
 *
 * 모든 필드는, 그에 대응하는 리졸버 함수가 있어야 하며
 * 이들 함수는 스키마의 규칙을 따라야 한다.
 * 함수는 스키마에 정의된 필드와 반드시 동일한 이름을 가져야 하며
 * 스키마에 정의된 데이터 타입을 반환한다.
 */

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 웹 서버를 구동하기 위해 listen 메소드를 호출
server
  .listen({ port: 4001 })
  .then(({ url }) => console.log(`GraphQL Service running on ${url}`));

/**
 * Root Resolver
 * GraphQL APi는 QUery, Mutation, Subscription 루트 타입을 가진다
 * 세 타입은 최상단에 위치하며, 이들을 통해 모든 API 엔트리 포인트를 표현할 수 있다.
 * Query 타입에 totalPhotos 필드를 추가했기 때문에 API가  해당 필드에 대한 쿼리 작업을 수행할 수 있는 것임
 *
 * Type Resolver
 * GraphQL 쿼리, 뮤테이션, 섭스크립션 작업 후 결과값으로 반환되는 데이터의 형태는 쿼리의 형태와 동일하다
 *
 */
