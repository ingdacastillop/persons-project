package org.danielcastillo.backend.infrastructure;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.danielcastillo.backend.application.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MySqlPersonRepository implements PersonRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void persist(PersonJpa personJpa) {
        entityManager.persist(personJpa);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PersonJpa> getAll() {
        return entityManager.createNamedQuery("PersonJpa.findAll").getResultList();
    }

    @Override
    public Optional<PersonJpa> findByUuid(String uuid) {
        var result = entityManager
                .createQuery("SELECT p FROM PersonJpa p WHERE p.uuid = ?1")
                .setParameter(1, uuid)
                .getResultList();

        return result.isEmpty() ? Optional.empty() : Optional.of((PersonJpa) result.get(0));
    }

    public void destroy(PersonJpa person) {
        entityManager.remove(person);
    }
}
