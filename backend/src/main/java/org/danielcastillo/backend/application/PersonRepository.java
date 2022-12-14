package org.danielcastillo.backend.application;

import org.danielcastillo.backend.infrastructure.PersonJpa;

import java.util.List;

public interface PersonRepository {
    void persist(PersonJpa personJpa);
    List<PersonJpa> getAll();
}
