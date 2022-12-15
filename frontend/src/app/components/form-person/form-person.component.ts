import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Person } from '../../domain/person';
import { FormPersonControl } from './form-person.control';

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

  constructor() {
    this.formControl = new FormPersonControl();
  }
}
