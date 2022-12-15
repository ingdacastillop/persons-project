package org.danielcastillo.backend.application.services;

import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class CheckBirthdayPerson {
    public boolean execute(LocalDate birthday) {
        int birthdayYear = birthday.getYear();
        int currentYear = LocalDate.now().getYear();

        int differenceYear = currentYear - birthdayYear;

        System.out.println(differenceYear);

        return differenceYear >= 18 && differenceYear <= 80;
    }
}
