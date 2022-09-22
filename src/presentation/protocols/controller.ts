import { HttpRequest, HttpResponse } from "../controllers/protocols/http";

export interface Controller {
  exec(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
