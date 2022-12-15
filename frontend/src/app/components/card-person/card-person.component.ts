import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PersonRepositoty } from 'src/app/infrastructure/person.repository';
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

  constructor(private repository: PersonRepositoty) {}

  public onSelect(): void {
    if (this.person) {
      this.repository.select(this.person);
    }
  }
}
