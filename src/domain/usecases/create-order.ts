import { Order, OrderProduct } from "@/domain/entities";

export interface CreateOrderParams {
  id: string;
  products: OrderProduct[];
}

export interface CreateOrderUseCase {
  exec: (params: CreateOrderParams) => Promise<Order>;
}
