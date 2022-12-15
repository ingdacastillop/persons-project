import { FormControl, FormGroup } from '@angular/forms';
import { required } from '@xofttion-enterprise/angular-components';
import { Person } from 'src/app/domain/person';

export class FormPersonControl extends FormGroup {
  constructor(maxDate: Date) {
    super({
      dni: new FormControl(null, [required]),
      firstName: new FormControl(null, [required]),
      lastName: new FormControl(null, [required]),
      address: new FormControl(null, []),
      phone: new FormControl(null, []),
      email: new FormControl(null, []),
      hobbies: new FormControl(null, []),
      birthday: new FormControl(maxDate, [required]),
    });
  }

  public get dni(): FormControl {
    return this.get('dni') as FormControl;
  }

  public get firstName(): FormControl {
    return this.get('firstName') as FormControl;
  }

  public get lastName(): FormControl {
    return this.get('lastName') as FormControl;
  }

  public get address(): FormControl {
    return this.get('address') as FormControl;
  }

  public get phone(): FormControl {
    return this.get('phone') as FormControl;
  }

  public get email(): FormControl {
    return this.get('email') as FormControl;
  }

  public get hobbies(): FormControl {
    return this.get('hobbies') as FormControl;
  }

  public get birthday(): FormControl {
    return this.get('birthday') as FormControl;
  }

  public createPerson(): Person {
    return new Person(
      '',
      this.dni.value,
      this.firstName.value,
      this.lastName.value,
      'hombre',
      this.birthday.value,
      this.hobbies.value,
      this.address.value,
      this.phone.value,
      this.email.value
    );
  }
}
