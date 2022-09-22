import { mockCreateOrderParams, mockOrder } from "@/domain/test/mock-order";
import { MongoHelper } from "@/infra/helpers/mongo-helper";
import { MongoCreateOrderRepo } from "./mongo-create-order-repo";

describe("MongoCreateOrderRepo", () => {
  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await MongoHelper.connect(process.env.MONGO_URL!);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  it("should create an Order", async () => {
    const sut = new MongoCreateOrderRepo();

    const params = mockCreateOrderParams();

    const result = await sut.create(params);

    expect(result).toEqual(mockOrder());
  });
});
