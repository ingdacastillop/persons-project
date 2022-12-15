import { FormControl, FormGroup } from '@angular/forms';
import { email, required } from '@xofttion-enterprise/angular-components';
import { Person } from '../../domain/person';

export class FormPersonControl extends FormGroup {
  constructor(maxDate: Date) {
    super({
      dni: new FormControl(null, [required]),
      sex: new FormControl(null, [required]),
      firstName: new FormControl(null, [required]),
      lastName: new FormControl(null, [required]),
      address: new FormControl(null, []),
      phone: new FormControl(null, []),
      email: new FormControl(null, [email]),
      hobbies: new FormControl(null, []),
      birthday: new FormControl(maxDate, [required]),
    });
  }

  public get dni(): FormControl {
    return this.get('dni') as FormControl;
  }

  public get sex(): FormControl {
    return this.get('sex') as FormControl;
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

  public changePerson(person: Person): void {
    this.dni.setValue(person.dni);
    this.sex.setValue(person.sex);
    this.firstName.setValue(person.firstName);
    this.lastName.setValue(person.lastName);
    this.address.setValue(person.address);
    this.phone.setValue(person.phone);
    this.email.setValue(person.email);
    this.hobbies.setValue(person.hobbies);
    this.birthday.setValue(person.birthday);
  }

  public createPerson(person?: Person): Person {
    return new Person(
      person?.uuid || '',
      this.dni.value,
      this.firstName.value,
      this.lastName.value,
      this.sex.value,
      this.birthday.value,
      this.hobbies.value,
      this.address.value,
      this.phone.value,
      this.email.value
    );
  }
}
