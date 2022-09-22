export enum StatusCode {
  ok = 200,
}

export interface HttpRequest<T> {
  body?: T;
}

export interface HttpResponse<T> {
  statusCode: StatusCode;
  body?: T;
}
