import { CreateOrderUseCase } from "@/domain/usecases/create-order";

export class CreateOrderController {
  constructor(private readonly createOrderUseCase: CreateOrderUseCase) {}

  async exec(httpRequest: any): Promise<any> {
    const order = await this.createOrderUseCase.exec(httpRequest.body);

    return {
      body: order,
      statusCode: 200,
    };
  }
}
