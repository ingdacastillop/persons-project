import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonComponentModule,
  DateFieldComponentModule,
  SelectFieldComponentModule,
  SnackbarComponentModule,
  TextFieldComponentModule,
  ThemeDirectiveModule,
} from '@xofttion-enterprise/angular-components';
import { FormPersonComponent } from './form-person.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponentModule,
    TextFieldComponentModule,
    DateFieldComponentModule,
    SnackbarComponentModule,
    SelectFieldComponentModule,
    ThemeDirectiveModule,
  ],
  declarations: [FormPersonComponent],
  exports: [FormPersonComponent],
})
export class FormPersonComponentModule {}
