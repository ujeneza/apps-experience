package com.yourright.unemployment;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Date;


public class Unemployment {

    public Long id;
    public LocalDate startDate;
    public BigDecimal grossSalary;
    public long familyStatusId;

    public Unemployment(Long id, LocalDate startDate, BigDecimal grossSalary, Long familyStatusId) {
        this.id = id;
        this.startDate = startDate;
        this.grossSalary = grossSalary;
        this.familyStatusId = familyStatusId;
    }

    @JsonCreator
    static Unemployment unemployment(
            @JsonProperty("id") Long id,
            @JsonProperty(value = "startDate", required = true) LocalDate startDate,
            @JsonProperty(value = "grossSalary", required = true) BigDecimal grossSalary,
            @JsonProperty(value = "familyStatusId", required = true) long familyStatusId) {
        return new Unemployment(id, startDate,grossSalary,familyStatusId );
    }


}
