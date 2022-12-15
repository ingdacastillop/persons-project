import { Sex } from '../domain/person-type';

export interface PersonPayload {
  dni: string;
  firstName: string;
  lastName: string;
  address?: string;
  phone?: string;
  email?: string;
  sex: Sex;
  hobbies?: string;
  birthday: string;
}

export interface PersonResponse {
  uuid: string;
  dni: string;
  firstName: string;
  lastName: string;
  address?: string;
  phone?: string;
  email?: string;
  sex: Sex;
  hobbies?: string;
  birthday: string;
}
