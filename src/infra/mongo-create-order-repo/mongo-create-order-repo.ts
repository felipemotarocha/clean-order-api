import { DbCreateOrderRepo } from "@/data/usecases/db-create-order/protocols";
import { Order } from "@/domain/entities";
import { CreateOrderParams } from "@/domain/usecases/create-order";
import { MongoHelper } from "../helpers/mongo-helper";

export class MongoCreateOrderRepo implements DbCreateOrderRepo {
  async create(params: CreateOrderParams): Promise<Order> {
    const amount = params.products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    const collection = MongoHelper.getCollection<Order>("orders");

    await collection?.insertOne({ ...params, amount });

    return { ...params, amount };
  }
}
