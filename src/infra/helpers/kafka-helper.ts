import { Kafka, Message } from "kafkajs";

interface IKafkaHelper {
  kafka?: Kafka;
  init: (clientId: string, brokers: string[]) => void;
  produce: (topic: string, messages: Message[]) => Promise<void>;
}

export const KafkaHelper: IKafkaHelper = {
  kafka: undefined,

  init(clientId: string, brokers: string[]) {
    this.kafka = new Kafka({ clientId, brokers });
  },

  async produce(topic: string, messages: Message[]): Promise<void> {
    if (!this.kafka) throw new Error("Kafka not initialized");

    const producer = this.kafka.producer();

    await producer.connect();
    await producer.send({ topic, messages });
    await producer.disconnect();
  },
};
