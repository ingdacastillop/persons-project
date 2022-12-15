package org.danielcastillo.backend.application.interactors;

import org.danielcastillo.backend.application.PersonDTO;
import org.danielcastillo.backend.application.PersonRepository;
import org.danielcastillo.backend.application.Response;
import org.danielcastillo.backend.application.services.CheckBirthdayPerson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UpdatePerson {
    @Autowired
    private CheckBirthdayPerson checkBirthdayPerson;
    @Autowired
    private PersonRepository personRepository;

    @Transactional
    public Response execute(String uuid, PersonDTO personDTO) {
        if (!checkBirthdayPerson.execute(personDTO.birthday)) {
            return new Response(false, "Persona debe estar un rango de edad de 18 y 80 años", null);
        }

        var optional = personRepository.findByUuid(uuid);

        if (optional.isEmpty()) {
            return new Response(false, "Persona no fue encontrada en la Plataforma", null);
        }

        var personJpa = optional.get();

        personJpa.firstName = personDTO.firstName;
        personJpa.lastName = personDTO.lastName;
        personJpa.address = personDTO.address;
        personJpa.phone = personDTO.phone;
        personJpa.email = personDTO.email;
        personJpa.sex = personDTO.sex;
        personJpa.birthday = personDTO.birthday;

        String fullName = personJpa.firstName + " " + personJpa.lastName;

        return new Response(true, fullName + " fue actualizado(a) exitosamente en la Plataforma", personJpa);
    }
}
