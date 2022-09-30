import { mockCreateOrderParams, mockOrder } from "@/domain/test/mock-order";
import { KafkaHelper } from "@/infra/helpers/kafka-helper";
import { KafkaCreateOrderRepo } from "./kafka-create-order-repo";

describe("KafkaCreateOrderRepo", () => {
  beforeAll(() => {
    KafkaHelper.init("clean-order-api", ["localhost:9093"]);
  });

  it("should post order creation on kafka", async () => {
    const sut = new KafkaCreateOrderRepo();

    const order = mockCreateOrderParams();

    const result = await sut.create(order);

    expect(result).toEqual(mockOrder());
  });
});
