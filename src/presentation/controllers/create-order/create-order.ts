import { Order } from "@/domain/entities";
import {
  CreateOrderParams,
  CreateOrderUseCase,
} from "@/domain/usecases/create-order";
import { HttpRequest, HttpResponse, StatusCode } from "../protocols/http";

export class CreateOrderController {
  constructor(private readonly createOrderUseCase: CreateOrderUseCase) {}

  async exec(
    httpRequest: HttpRequest<CreateOrderParams>
  ): Promise<HttpResponse<Order>> {
    const order = await this.createOrderUseCase.exec(httpRequest.body!);

    return {
      body: order,
      statusCode: StatusCode.ok,
    };
  }
}
