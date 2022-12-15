import { ListFieldElement } from '@xofttion-enterprise/angular-components';
import { Sex } from '../domain/person-type';

export class SexElement implements ListFieldElement {
  constructor(private _sex: Sex) {}

  initials?: string | undefined;
  photo?: string | undefined;
  subtitle?: string | undefined;

  get description(): string {
    return this._sex.toUpperCase();
  }

  get title(): string {
    return this._sex.toUpperCase();
  }

  get value(): Sex {
    return this._sex;
  }

  compareTo(value: Sex): boolean {
    return value === this._sex;
  }

  hasCoincidence(_: string): boolean {
    return false;
  }
}

export const sexsElement: SexElement[] = [
  new SexElement('hombre'),
  new SexElement('mujer'),
];
