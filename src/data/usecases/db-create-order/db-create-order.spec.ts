import { DbCreateOrderRepoStub } from "@/data/test/mock-db-create-order-repo";
import { mockCreateOrderParams, mockOrder } from "@/domain/test/mock-order";
import { CreateOrderParams } from "@/domain/usecases/create-order";
import { DbCreateOrder } from "./db-create-order";
import { DbCreateOrderRepo } from "./protocols";

interface SutTypes {
  sut: DbCreateOrder;
  dbCreateOrderRepo: DbCreateOrderRepo;
}

const makeSut = (): SutTypes => {
  const dbCreateOrderRepo = new DbCreateOrderRepoStub();
  const sut = new DbCreateOrder(dbCreateOrderRepo);

  return { dbCreateOrderRepo, sut };
};

describe("DbCreateOrder", () => {
  it("should return an Order on success", async () => {
    const { sut } = makeSut();

    const params: CreateOrderParams = mockCreateOrderParams();

    const result = await sut.exec(params);

    expect(result).toEqual(mockOrder());
  });

  it("should call DbCreateOrderRepo with correct values", async () => {
    const { sut, dbCreateOrderRepo } = makeSut();

    const params: CreateOrderParams = mockCreateOrderParams();

    const createSpy = jest.spyOn(dbCreateOrderRepo, "create");

    await sut.exec(params);

    expect(createSpy).toHaveBeenCalledWith(params);
  });
});
