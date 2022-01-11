/**
 * We'll deliver a message to multiple consumers.
 * 메세지를 다수의 컨슈머들에게 보내기.
 *
 * 이러한 패턴은 publish/ subscribe라 알려져 있습니다.
 *
 * 패턴을 설명하기 위해, 우리는 간단한 로깅 시스템을 만들 거예요. 두 프로그램(emit log, recieve로 구성되죠)
 * 로깅 시스템에서는 수신자 프로그램들은 메세지를 받을 겁니다.
 * 그 방법으로 우리는 한 수신자를 실행하고 로그를 디스크에 전달 가능하고
 * 동시에 다른 수신자를 실행하고 화면에서 로그를 볼 수 있습니다.
 *
 * 기본적으로, publish된 로그 메세지는 모든 수신자에게 broadcast됩니다.
 *
 * RabbitMQ 메세징 모델의 핵심 개념은, 송신자가 queue에게 메세지를 직접 전달하지 않는다는 겁니다.
 * 사실, 꽤 자주 프로듀서는 메세지가 큐에 전달되는지도 몰라요.
 *
 * 대신, 프로듀서는 exchange에 메세지를 전달할 뿐입니다.
 * Exchange는 매우 간단한 것이에요. 한 쪽에서는 producer로부터 메세지를 받고
 * 다른 쪽에서는 그것을 큐에다가 밀어주죠. exchange는 그것이 받은 메세지가 무엇을 해야할지 정확히 알아야 해요.
 * 이것이 특정한 큐에 가야 할지? 많은 큐에 가야 하지, 혹은 사라져야 할지도요.
 * 그러한 규칙은 exchange type에 의해 정의됩니다.
 *
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
    var exchange = "logs";
    var msg = process.argv.slice(2).join(" ") || "Hello World!";
    /**
     * fanout exhange는 몹시 간단합니다. 이름에서 유추할 수 있듯이
     * 이것은 그것이 받은 모든 메세지를 아는 큐에다가 다 전달해요.
     */
    channel.assertExchange(exchange, "fanout", {
      durable: false,
    });
    channel.publish(exchange, "", Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });

  setTimeout(function () {
    connection.close();
    process.exit(0);
  }, 500);
});

/**
 * Temporary queues
 * Being able to name queue was crucial for us
 * we needed to point the workers to the same queue.
 *
 * But that's not the case for our logger. we want to hear about all log messages,
 * not just a subset of them.
 */
