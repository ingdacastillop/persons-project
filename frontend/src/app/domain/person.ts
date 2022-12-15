import { Sex } from './person-type';

export class Person {
  constructor(
    public readonly uuid: string,
    public readonly dni: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly sex: Sex,
    public readonly birthday: Date,
    public readonly hobbies?: string,
    public readonly address?: string,
    public readonly phone?: string,
    public readonly email?: string
  ) {}

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
