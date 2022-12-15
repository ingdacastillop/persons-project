import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Person } from '../../domain/person';

@Component({
  selector: 'card-person',
  templateUrl: 'card-person.component.html',
  styleUrls: ['card-person.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardPersonComponent {
  @Input()
  public person?: Person;
}
