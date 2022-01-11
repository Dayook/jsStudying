/**
 * In the first tutorial
 * we wrote programs to send and receive messages from a named queue.
 * In this one we'll create a Work Queue that will be use to
 * distribute time-consuming tasks among multiple workers.
 *
 * Work Queue의 중심 개념은, resource-intensive한 일을 즉시 실행하는 것을 피하고
 * 그것이 완료되도록 기다리는 것이빈다.
 * 대신 우리는 작업이 나중에 완료되도록 일정을 잡을 수 있죠.
 * 우리는 task를 메세지로 캡슐화하여 그것을 큐에 보냅니다.
 * 백그라운드에서 실행중인 worker 프로세스는 task를 pop하고 결과적으로 실행시킵니다.
 * 많은 worker를 실행하면 task는 그들 사이에서 공유됩니다.
 *
 * 이러한 개념은 특히 웹 어플리케이션에서 유용합니다.
 *
 * 이전 튜토리얼에서 우리는 Hello world! 라는 메세지를 보냈습니다.
 * 이제 우리는 복잡한 태스크를 대변하는 문자열을 보낼 겁니다.
 * setTimeout method를 사용해보도록 하죠.
 */

var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    var queue = "task_queue";
    var msg = process.argv.slice(2).join(" ") || "Hello World";

    channel.assertQueue(queue, {
      durable: true,
    });
    channel.sendToQueue(queue, Buffer.from(msg), {
      persistent: true,
    });
    console.log(" [x] Sent '%s'", msg);
  });
});
