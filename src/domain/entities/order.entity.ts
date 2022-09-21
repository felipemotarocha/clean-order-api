import { Product } from "./product.entity";

export interface Order {
  id: string;
  products: Product[];
  amount: number;
}
