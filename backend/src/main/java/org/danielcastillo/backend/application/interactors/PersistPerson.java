package org.danielcastillo.backend.application.interactors;

import org.danielcastillo.backend.application.PersonDTO;
import org.danielcastillo.backend.application.PersonRepository;
import org.danielcastillo.backend.application.Response;
import org.danielcastillo.backend.application.factories.PersonFactory;
import org.danielcastillo.backend.application.services.CheckBirthdayPerson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PersistPerson {
    @Autowired
    private CheckBirthdayPerson checkBirthdayPerson;
    @Autowired
    private PersonRepository personRepository;

    @Transactional
    public Response execute(PersonDTO personDTO) {
        if (!checkBirthdayPerson.execute(personDTO.birthday)) {
            return new Response(false, "Persona debe estar un rango de edad de 18 y 80 años", null);
        }

        var personJpa = PersonFactory.create(personDTO);

        personRepository.persist(personJpa);

        String fullName = personJpa.firstName + " " + personJpa.lastName;

        return new Response(true, fullName + " fue registrado(a) exitosamente en la Plataforma", personJpa);
    }
}
