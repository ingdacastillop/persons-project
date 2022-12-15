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

  public visible = false;

  constructor(private repository: PersonRepositoty) {}

  public ngOnInit(): void {
    this.repository.fetch().subscribe((persons) => {
      this.persons = persons;
    });
  }

  public openPerson(): void {
    this.visible = true;
  }

  public closePerson(): void {
    this.visible = false;
  }
}
