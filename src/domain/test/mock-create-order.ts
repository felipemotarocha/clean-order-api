import { Order } from "../entities";
import { CreateOrderUseCase } from "../usecases/create-order";
import { mockOrder } from "./mock-order";

export const mockedCreatedOrder = mockOrder();

export class CreateOrderUseCaseStub implements CreateOrderUseCase {
  async exec(): Promise<Order> {
    return mockedCreatedOrder;
  }
}
