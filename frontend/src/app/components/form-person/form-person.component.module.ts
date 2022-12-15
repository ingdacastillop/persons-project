import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonComponentModule,
  DateFieldComponentModule,
  TextFieldComponentModule,
} from '@xofttion-enterprise/angular-components';
import { FormPersonComponent } from './form-person.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ButtonComponentModule,
    TextFieldComponentModule,
    DateFieldComponentModule,
  ],
  declarations: [FormPersonComponent],
  exports: [FormPersonComponent],
})
export class FormPersonComponentModule {}
