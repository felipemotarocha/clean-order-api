import { Order } from "@/domain/entities";
import { CreateOrderParams } from "@/domain/usecases/create-order";

export interface DbCreateOrderRepo {
  create(params: CreateOrderParams): Promise<Order>;
}

export interface MessengerCreateOrderRepo {
  create(params: CreateOrderParams): Promise<Order>;
}
