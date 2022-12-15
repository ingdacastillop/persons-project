import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Person } from '../domain/person';

@Injectable({
  providedIn: 'root',
})
export class PersonRepositoty {
  constructor(private http: HttpClient) {}

  public async fecthAll(): Promise<Person[]> {
    return await firstValueFrom(
      this.http.get<Person[]>('http://localhost:8080/persons')
    );
  }
}
