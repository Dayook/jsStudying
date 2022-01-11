import amqp from "amqplib";
import { AMQPPubSub } from "graphql-amqp-subscriptions";


/**
 * we'll deliver a message to multiple consumers.
 * This pattern is known as "publis/subscribe"
 */

amqp
  .connect("amqp://saas:saas@company.ibricks.co.kr:5672?heartbeat=30")
  .then((conn) => {
    const pubusb = new AMQPPubSub({
      connection: conn,
    });
  })
  .catch((err) => {
    console.error(err);
  });
