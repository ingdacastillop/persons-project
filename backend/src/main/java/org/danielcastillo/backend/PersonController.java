package org.danielcastillo.backend;

import org.danielcastillo.backend.application.PersonDTO;
import org.danielcastillo.backend.application.Response;
import org.danielcastillo.backend.application.interactors.GetAllPerson;
import org.danielcastillo.backend.application.interactors.PersistPerson;
import org.danielcastillo.backend.application.interactors.UpdatePerson;
import org.danielcastillo.backend.infrastructure.PersonJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonController {
    @Autowired
    private PersistPerson persistPerson;
    @Autowired
    private GetAllPerson getAllPerson;
    @Autowired
    private UpdatePerson updatePerson;

    @PostMapping("/persons")
    public Response persist(@RequestBody PersonDTO person) {
        return persistPerson.execute(person);
    }

    @GetMapping("/persons")
    public List<PersonJpa> getAll() {
        return getAllPerson.execute();
    }

    @PutMapping("/persons/{uuid}")
    public Response update(@PathVariable String uuid, @RequestBody PersonDTO person) {
        return updatePerson.execute(uuid, person);
    }
}
