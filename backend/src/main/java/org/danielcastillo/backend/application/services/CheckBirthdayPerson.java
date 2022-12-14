package org.danielcastillo.backend.application.services;

import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class CheckBirthdayPerson {
    public boolean execute(LocalDate birthday) {
        return true;
    }
}
