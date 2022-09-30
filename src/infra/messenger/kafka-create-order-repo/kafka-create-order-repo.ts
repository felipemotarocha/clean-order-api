import { MessengerCreateOrderRepo } from "@/data/usecases/messenger-create-order/protocols";
import { Order } from "@/domain/entities";
import { CreateOrderParams } from "@/domain/usecases/create-order";
import { KafkaHelper } from "@/infra/helpers/kafka-helper";

export class KafkaCreateOrderRepo implements MessengerCreateOrderRepo {
  async create(params: CreateOrderParams): Promise<Order> {
    const amount = params.products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    const order = { ...params, amount };

    await KafkaHelper.produce("orders", [{ value: JSON.stringify(order) }]);

    return order;
  }
}
