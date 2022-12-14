package org.danielcastillo.backend;

import org.danielcastillo.backend.application.PersonDTO;
import org.danielcastillo.backend.application.PersonRepository;
import org.danielcastillo.backend.application.Response;
import org.danielcastillo.backend.application.interactors.RegisterPerson;
import org.danielcastillo.backend.infrastructure.PersonJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {
    @Autowired
    private RegisterPerson registerPerson;
    @Autowired
    private PersonRepository personRepository;

    @PostMapping("/persons")
    public Response persist(@RequestBody PersonDTO person) {
        return registerPerson.execute(person);
    }

    @GetMapping("/persons")
    public List<PersonJpa> getAll() {
        return personRepository.getAll();
    }
}
