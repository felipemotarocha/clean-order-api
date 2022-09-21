import { Order } from "@/domain/entities";
import { DbCreateOrderRepo } from "../usecases/db-create-order/protocols";

export const dbCreateOrderRepoMockResult = {
  id: "any_id",
  products: [{ id: "any_id", name: "any_name", price: 200 }],
  amount: 400,
};

export class DbCreateOrderRepoStub implements DbCreateOrderRepo {
  async create(): Promise<Order> {
    return dbCreateOrderRepoMockResult;
  }
}
