/* chapter06/socket.io/socket.js */

const SocketIO = require("socket.io");

module.exports = (server) => {
  const io = SocketIO(server, { path: "/socket.io" }); //SocketIO의 인스턴스 생성, index.html의 path와 동일하게

  io.on("connection", (socket) => {
    //Connection 생성
    const req = socket.request;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    console.log(`New Client : ${ip}, socket.id : ${socket.id}`); //socket.id 각 소켓에 고유한 ID 부여. 이를 이용하여 특정 사용자에게만 메시지를 보낸다든가 하는 기능을 만들 수 있음

    socket.on("disconnect", () => {
      //socket.on()을 통해 이벤트 감지
      console.log(`Client Out : ${ip}, socket.id : ${socket.id}`);
      clearInterval(socket.interval);
    });

    socket.on("error", (err) => {
      //오류 처리
      console.error(err);
    });

    socket.on("from client", (data) => {
      //클라이언트가 넘긴 데이터
      console.log(data);
    });

    socket.interval = setInterval(() => {
      socket.emit("from server", "Message From Server"); ////ws send 대신 emit. io.emit()은 연결된 모든 소켓에게 이벤트 보냄. socket.emit()은 특정 소켓에게만 이벤트를 보내는 메서드. ('이벤트명', '메시지')
    }, 3000);
  });
};
