package org.danielcastillo.backend;

import org.danielcastillo.backend.application.PersonRepository;
import org.danielcastillo.backend.infrastructure.PersonJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {
    @Autowired
    private PersonRepository personRepository;

    @GetMapping("/persons")
    public List<PersonJpa> getAll() {
        return personRepository.getAll();
    }
}
