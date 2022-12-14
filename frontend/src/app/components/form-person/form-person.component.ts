import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { SnackbarComponentService } from '@xofttion-enterprise/angular-components';
import { Person } from '../../domain/person';
import { PersonRepositoty } from '../../infrastructure/person.repository';
import { sexsElement } from '../sex-element';
import { FormPersonControl } from './form-person.control';

const YEAR_TIMESTAMP = 1000 * 60 * 60 * 24 * 365 * 18;

@Component({
  selector: 'form-person',
  templateUrl: 'form-person.component.html',
  styleUrls: ['form-person.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormPersonComponent {
  @Output()
  public closeForm: EventEmitter<boolean>;

  public formControl: FormPersonControl;

  public person?: Person;

  public sexs = sexsElement;

  constructor(
    private repository: PersonRepositoty,
    private snackbar: SnackbarComponentService
  ) {
    this.formControl = new FormPersonControl(
      new Date(new Date().getTime() - YEAR_TIMESTAMP)
    );

    this.repository.subscribe((person) => {
      this.person = person;
      this.formControl.changePerson(person);
    });

    this.closeForm = new EventEmitter();
  }

  public onCancel(): void {
    this.formControl.reset();
    this.person = undefined;
    this.closeForm.emit(true);
  }

  public async onRegister(): Promise<void> {
    const response = await this.repository.persist(
      this.formControl.createPerson()
    );

    if (response.success) {
      this.snackbar.success(response.message);

      this.formControl.reset();
      this.closeForm.emit(true);
    } else {
      this.snackbar.danger(response.message);
    }
  }

  public async onUpdate(): Promise<void> {
    const response = await this.repository.update(
      this.formControl.createPerson(this.person)
    );

    if (response.success) {
      this.snackbar.success(response.message);

      this.formControl.reset();
      this.closeForm.emit(true);
    } else {
      this.snackbar.danger(response.message);
    }
  }
}
