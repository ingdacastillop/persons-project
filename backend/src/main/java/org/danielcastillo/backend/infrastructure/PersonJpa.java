package org.danielcastillo.backend.infrastructure;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "persons")
@NamedQuery(name="PersonJpa.findAll", query="SELECT p FROM PersonJpa p")
public class PersonJpa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String uuid;
    public String dni;
    public String firstName;
    public String lastName;
    public String address;
    public String sex;
    public String hobbies;
    public LocalDate birthday;
}
