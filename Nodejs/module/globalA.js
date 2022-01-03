module.exports = () => global.message;

/**
 * global 객체의 남용 X
 * 프로그램의 규모가 커질수록 어떤 파일에서 객체에 값을 대입했느지 찾기 힘들어져
 * 유지보수에 어려움을 겪을 수 있음.
 */