package com.yourright.unemployment.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.yourright.unemployment.Unemployment;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.Month;
import java.util.Date;

public class UnemploymentAllowance {
    public Long id;
    public int year;
    public Month month;
    public BigDecimal unemploymentAllowance;

    public UnemploymentAllowance(Long id, int year , Month month , BigDecimal unemploymentAllowance  ) {
        this.id = id;
        this.year = year;
        this.month = month;
        this.unemploymentAllowance = unemploymentAllowance;

    }

    @JsonCreator
    static UnemploymentAllowance unemploymentAllowance(
            @JsonProperty("id") Long id,
            @JsonProperty(value = "year", required = true) int year,
            @JsonProperty(value = "month", required = true) Month month,
            @JsonProperty(value = "unemploymentAllowance", required = true) BigDecimal unemploymentAllowance) {
        return new UnemploymentAllowance(id, year,month,unemploymentAllowance);
    }


}
