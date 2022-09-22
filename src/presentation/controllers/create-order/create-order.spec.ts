import { CreateOrderUseCaseStub } from "@/domain/test/mock-create-order";
import { mockCreateOrderParams, mockOrder } from "@/domain/test/mock-order";
import { StatusCode } from "../protocols/http";
import { CreateOrderController } from "./create-order";

describe("Create Order Controller", () => {
  it("should return 200 on Order creation success", async () => {
    const sut = new CreateOrderController(new CreateOrderUseCaseStub());

    const response = await sut.exec({ body: mockCreateOrderParams() });

    expect(response.body).toEqual(mockOrder());
    expect(response.statusCode).toBe(StatusCode.ok);
  });
});
