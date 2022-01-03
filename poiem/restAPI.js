/**
 * REST(Representational State Transfer)
 * 
 * REST에서 가장 중요한 기본적인 규칙은 두 가지이다.
 * (1) URI는 자원을 표현하는 데에 집중하고
 * (2) 행위에 대한 정의는 HTTP method를 통해 하는 것.
 * 
 * REST의 기본 원칙을 성실하게 지킨 서비스 디자인을 RESTful이라고 표현한다.
 * 
 * URI는 정보의 자원을 표현.
 * 리소스명은 동사보다는 명사를 사용한다. URI는 자원을 표현하는 데 중점을 두어야 한다. get 같은 행위에 대한 표현이 들어가선 안 된다
 * 
 * bad
 * GET /getTodos/1
 * 
 * Good
 * GET /todos/1
 * 
 * 2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.
 * 주로 5가지의 Method를 사용해서 CRUD 구현.
 * 
 * GET - 모든/ 특정 리소스를 조회
 * POST create - 리소스를 생성
 * PUT replace - 리소스의 전체를 교체
 * PATCH modifie - 리소스의 일부를 수정
 * DELETE - 모든 / 특정 리소스를 삭제 
 * 
 * 
 * 3. REST API의 구성
 * REST API는 자원(Resource), 행위(Verb), 표현(Representation) 3 요소로 구성됨
 * 
 */

/**
 * REST API의 Example
 */