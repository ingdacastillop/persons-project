package org.danielcastillo.backend.application.interactors;

import org.danielcastillo.backend.application.PersonRepository;
import org.danielcastillo.backend.application.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

public class DestroyPerson {
    @Autowired
    private PersonRepository personRepository;

    @Transactional
    public Response execute(String uuid) {
        var optional = personRepository.findByUuid(uuid);

        if (optional.isEmpty()) {
            return new Response(false, "Persona no fue encontrada en la Plataforma", null);
        }

        var personJpa = optional.get();

        personRepository.destroy(personJpa);

        String fullName = personJpa.firstName + " " + personJpa.lastName;

        return new Response(true, fullName + " fue eliminado(a) exitosamente en la Plataforma", personJpa);
    }
}
