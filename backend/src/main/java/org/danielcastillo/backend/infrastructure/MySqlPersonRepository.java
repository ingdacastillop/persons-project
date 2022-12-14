package org.danielcastillo.backend.infrastructure;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.danielcastillo.backend.application.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MySqlPersonRepository implements PersonRepository {
    @PersistenceContext
    private EntityManager entityManager;

    public void persist(PersonJpa personJpa) {
        entityManager.persist(personJpa);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PersonJpa> getAll() {
        return entityManager.createNamedQuery("PersonJpa.findAll").getResultList();
    }
}
