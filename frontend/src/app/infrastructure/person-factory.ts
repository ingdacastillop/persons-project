import { Person } from '../domain/person';
import { PersonPayload, PersonResponse } from './person-dto';

export function createPerson(personDto: PersonResponse): Person {
  return new Person(
    personDto.uuid,
    personDto.dni,
    personDto.firstName,
    personDto.lastName,
    personDto.sex,
    new Date(`${personDto.birthday}T05:00:00.000Z`),
    personDto.hobbies,
    personDto.address,
    personDto.phone,
    personDto.email
  );
}

export function exportPerson(person: Person): PersonPayload {
  return {
    dni: person.dni,
    firstName: person.firstName,
    lastName: person.lastName,
    address: person.address,
    sex: person.sex,
    birthday: person.birthday.toISOString(),
    phone: person.phone,
    email: person.email,
    hobbies: person.hobbies,
  };
}
