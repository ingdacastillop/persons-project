import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SnackbarComponentService } from '@xofttion-enterprise/angular-components';
import { PersonRepositoty } from 'src/app/infrastructure/person.repository';
import { Person } from '../../domain/person';
import { FormPersonControl } from './form-person.control';

const YEAR_TIMESTAMP = 1000 * 60 * 60 * 24 * 365 * 18;

@Component({
  selector: 'form-person',
  templateUrl: 'form-person.component.html',
  styleUrls: ['form-person.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormPersonComponent {
  @Input()
  public person?: Person;

  public formControl: FormPersonControl;

  constructor(
    private repository: PersonRepositoty,
    private snackbar: SnackbarComponentService
  ) {
    this.formControl = new FormPersonControl(
      new Date(new Date().getTime() - YEAR_TIMESTAMP)
    );
  }

  public async onSubmit(): Promise<void> {
    const response = await this.repository.persist(
      this.formControl.createPerson()
    );

    if (response.success) {
      this.snackbar.success(response.message);

      this.formControl.reset();
    } else {
      this.snackbar.danger(response.message);
    }
  }
}
