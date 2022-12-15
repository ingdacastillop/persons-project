import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Person } from './domain/person';
import { PersonRepositoty } from './infrastructure/person.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public persons: Person[] = [];

  constructor(private repository: PersonRepositoty) {}

  public async ngOnInit(): Promise<void> {
    //this.persons = await this.repository.fecthAll();
  }
}
