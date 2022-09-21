import { DbCreateOrderRepoStub } from "@/data/test/mock-db-create-order-repo";
import { CreateOrderParams } from "@/domain/usecases/create-order";
import { DbCreateOrder } from "./db-create-order";

describe("DbCreateOrder", () => {
  it("should return an Order on success", async () => {
    const sut = new DbCreateOrder(new DbCreateOrderRepoStub());

    const params: CreateOrderParams = {
      id: "any_id",
      products: [{ id: "any_id", name: "any_name", price: 200, quantity: 2 }],
    };

    const result = await sut.exec(params);

    expect(result).toEqual({
      ...params,
      products: [{ id: "any_id", name: "any_name", price: 200 }],
      amount: 400,
    });
  });
});
