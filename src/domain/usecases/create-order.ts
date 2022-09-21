import { Order, Product } from "@/domain/entities";

export interface OrderProduct extends Pick<Product, "id" | "name" | "price"> {
  quantity: number;
}

export interface CreateOrderParams {
  id: string;
  products: OrderProduct[];
}

export interface CreateOrderUseCase {
  exec: (params: CreateOrderParams) => Promise<Order>;
}
