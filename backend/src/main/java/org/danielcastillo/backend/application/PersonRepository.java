package org.danielcastillo.backend.application;

import org.danielcastillo.backend.infrastructure.PersonJpa;

import java.util.List;
import java.util.Optional;

public interface PersonRepository {
    void persist(PersonJpa personJpa);
    List<PersonJpa> getAll();
    Optional<PersonJpa> findByUuid(String uuid);
    void destroy(PersonJpa person);
}
