import { PersonResponse } from './person-dto';

export interface Response {
  success: boolean;
  message: string;
  data?: PersonResponse;
}
