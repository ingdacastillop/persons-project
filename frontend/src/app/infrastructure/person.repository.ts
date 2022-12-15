import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../domain/person';
import { PersonResponse } from './person-dto';
import { createPerson, exportPerson } from './person-factory';
import { Response } from './response-dto';

const API_PERSONS = `${environment.api}/persons`;

@Injectable({
  providedIn: 'root',
})
export class PersonRepositoty {
  private persons$: BehaviorSubject<Person[]>;

  private persons?: Person[];

  constructor(private http: HttpClient) {
    this.persons$ = new BehaviorSubject([] as Person[]);
  }

  public fetch(): Observable<Person[]> {
    if (!this.persons) {
      this.http
        .get<PersonResponse[]>(API_PERSONS)
        .pipe(map((persons) => persons.map((person) => createPerson(person))))
        .subscribe((persons) => {
          this.persons = persons;
          this.persons$.next(persons);
        });
    }

    return this.persons$?.asObservable();
  }

  public async persist(person: Person): Promise<Response> {
    return await firstValueFrom(
      this.http.post<Response>(API_PERSONS, exportPerson(person)).pipe(
        tap((response) => {
          if (response.success && response.data && this.persons) {
            const person = createPerson(response.data);

            this.persons.push(person);
            this.persons$.next(this.persons);
          }
        })
      )
    );
  }

  public async update(person: Person): Promise<Response> {
    return await firstValueFrom(
      this.http.post<Response>(
        `${API_PERSONS}/${person.uuid}`,
        exportPerson(person)
      )
    );
  }
}
