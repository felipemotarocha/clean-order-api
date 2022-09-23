import { Order } from "@/domain/entities";
import {
  CreateOrderParams,
  CreateOrderUseCase,
} from "@/domain/usecases/create-order";
import { MessengerCreateOrderRepo } from "../db-create-order/protocols";

export class MessengerCreateOrder implements CreateOrderUseCase {
  constructor(
    private readonly messengerCreateOrderRepo: MessengerCreateOrderRepo
  ) {}

  async exec(params: CreateOrderParams): Promise<Order> {
    const order = await this.messengerCreateOrderRepo.create(params);

    return order;
  }
}
