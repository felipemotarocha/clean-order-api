import { Order } from "../entities";
import { CreateOrderParams } from "../usecases/create-order";

export const mockCreateOrderParams = (): CreateOrderParams => ({
  id: "any_id",
  products: [{ id: "any_id", name: "any_name", price: 200, quantity: 2 }],
});

export const mockOrder = (): Order => ({
  id: "any_id",
  products: [{ id: "any_id", name: "any_name", price: 200 }],
  amount: 400,
});
