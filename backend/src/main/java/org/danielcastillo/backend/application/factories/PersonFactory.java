package org.danielcastillo.backend.application.factories;

import org.danielcastillo.backend.application.PersonDTO;
import org.danielcastillo.backend.infrastructure.PersonJpa;

import java.util.UUID;

public class PersonFactory {
    public static PersonJpa create(PersonDTO personDTO) {
        var personJpa = new PersonJpa();
        personJpa.uuid = UUID.randomUUID().toString();
        personJpa.dni = personDTO.dni;
        personJpa.firstName = personDTO.firstName;
        personJpa.lastName = personDTO.lastName;
        personJpa.address = personDTO.address;
        personJpa.phone = personDTO.phone;
        personJpa.email = personDTO.email;
        personJpa.hobbies = personDTO.hobbies;
        personJpa.sex = personDTO.sex;
        personJpa.birthday = personDTO.birthday;

        return personJpa;
    }
}
