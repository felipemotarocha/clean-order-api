import { Product } from "./product";

export interface Order {
  id: string;
  products: Product[];
  amount: number;
}
