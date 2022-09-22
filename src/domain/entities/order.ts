import { Product } from "./product";

export interface OrderProduct extends Pick<Product, "id" | "name" | "price"> {
  quantity: number;
}

export interface Order {
  id: string;
  products: OrderProduct[];
  amount: number;
}
