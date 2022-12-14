export type Sex = 'hombre' | 'mujer';

export interface Person {
  uuid?: string;
  dni: string;
  firsName: string;
  lastName: string;
  address?: string;
  phone?: string;
  email?: string;
  sex: Sex;
  hobbies?: string;
  birthday: Date;
}
