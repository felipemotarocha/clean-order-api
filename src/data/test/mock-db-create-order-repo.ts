import { Order } from "@/domain/entities";
import { mockOrder } from "@/domain/test/mock-order";
import { DbCreateOrderRepo } from "../usecases/db-create-order/protocols";

export const dbCreateOrderRepoMockResult = mockOrder();

export class DbCreateOrderRepoStub implements DbCreateOrderRepo {
  async create(): Promise<Order> {
    return dbCreateOrderRepoMockResult;
  }
}
