import { Order } from "@/domain/entities";
import { mockCreateOrderParams, mockOrder } from "@/domain/test/mock-order";
import { CreateOrderUseCase } from "@/domain/usecases/create-order";
import { CreateOrderController } from "./create-order";

class CreateOrderUseCaseStub implements CreateOrderUseCase {
  async exec(): Promise<Order> {
    return mockOrder();
  }
}

describe("Create Order Controller", () => {
  it("should return 200 on Order creation success", async () => {
    const sut = new CreateOrderController(new CreateOrderUseCaseStub());

    const response = await sut.exec({ body: mockCreateOrderParams() });

    expect(response.body).toEqual(mockOrder());
    expect(response.statusCode).toBe(200);
  });
});
