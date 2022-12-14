package org.danielcastillo.backend.application.interactors;

import org.danielcastillo.backend.application.PersonRepository;
import org.danielcastillo.backend.infrastructure.PersonJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetAllPerson {
    @Autowired
    private PersonRepository personRepository;

    public List<PersonJpa> execute() {
    return personRepository.getAll();
}
}
