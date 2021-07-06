export interface apiResponse {
  status: number;
  message: string;
  body: Body;
}

class Body {
  id: string | undefined;
  email: string | undefined;
}
