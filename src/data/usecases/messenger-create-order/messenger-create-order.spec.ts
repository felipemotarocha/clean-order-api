import { MessengerCreateOrderRepoStub } from "@/data/test/mock-db-create-order-repo";
import { mockCreateOrderParams, mockOrder } from "@/domain/test/mock-order";
import { CreateOrderParams } from "@/domain/usecases/create-order";
import { MessengerCreateOrderRepo } from "../db-create-order/protocols";
import { MessengerCreateOrder } from "./messenger-create-order";

interface SutTypes {
  sut: MessengerCreateOrder;
  messengerCreateOrderRepo: MessengerCreateOrderRepo;
}

const makeSut = (): SutTypes => {
  const messengerCreateOrderRepo = new MessengerCreateOrderRepoStub();
  const sut = new MessengerCreateOrder(messengerCreateOrderRepo);

  return { sut, messengerCreateOrderRepo };
};

describe("MessengerCreateOrder", () => {
  it("should return an Order on creation success", async () => {
    const { sut } = makeSut();

    const params: CreateOrderParams = mockCreateOrderParams();

    const result = await sut.exec(params);

    expect(result).toEqual(mockOrder());
  });

  it("should throw if MessengerCreateOrderRepo throws", () => {
    const { sut, messengerCreateOrderRepo } = makeSut();

    const createSpy = jest.spyOn(messengerCreateOrderRepo, "create");

    createSpy.mockRejectedValueOnce(new Error());

    const promise = sut.exec(mockCreateOrderParams());

    expect(promise).rejects.toThrow();
  });
});
