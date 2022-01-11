import {gql, useSubscription} from '@apollo/client'
/**
 * query나 mutation처럼 graphql sever 로부터 데이터를 fetch(가져우는) 기능을 합니다.
 * 하지만 query와는 다르게 subscription은 오래 지속되면서 변화하는 결과값을 보내줍니다.
 * 대부분 웹소켓을 사용하여 graphql 서버와 연결을 유지하고 서버가 변경된 사항을 추적하여
 * 해당 사항을 클라이언트로 쏴줍니다.
 * 
 * Subscripton은 클라이언트에 알림을 보내는 작업과 같이
 * 실시간으로 처리해야 하는 목적에 부합하는 타입의 연산입니다.
 * 
 * When to use subscription
 * - Small, incremental changes to large objects.
 * - Low-latency, real-time updates. 
 * For example, a chat application's client wants to recieve
 * new message as soon as they're available.
 */

