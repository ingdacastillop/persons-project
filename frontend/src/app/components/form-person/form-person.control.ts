import { FormControl } from '@angular/forms';
import { required } from '@xofttion-enterprise/angular-components';

export class FormPersonControl {
  public dni: FormControl;
  public firstName: FormControl;
  public lastName: FormControl;
  public address: FormControl;
  public phone: FormControl;
  public email: FormControl;
  public hobbies: FormControl;
  public birthday: FormControl;

  constructor() {
    this.dni = new FormControl(null, [required]);
    this.firstName = new FormControl(null, [required]);
    this.lastName = new FormControl(null, [required]);
    this.address = new FormControl(null, []);
    this.phone = new FormControl(null, []);
    this.email = new FormControl(null, []);
    this.hobbies = new FormControl(null, []);
    this.birthday = new FormControl(null, [required]);
  }
}
