import { HttpRequest, HttpResponse } from "./http";

export interface Controller {
  exec(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
