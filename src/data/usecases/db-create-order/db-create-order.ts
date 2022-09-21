import { Order } from "@/domain/entities";
import {
  CreateOrderParams,
  CreateOrderUseCase,
} from "@/domain/usecases/create-order";
import { DbCreateOrderRepo } from "./protocols";

export class DbCreateOrder implements CreateOrderUseCase {
  constructor(private readonly dbCreateOrderRepo: DbCreateOrderRepo) {}

  async exec(params: CreateOrderParams): Promise<Order> {
    const order = await this.dbCreateOrderRepo.create(params);

    return order;
  }
}
