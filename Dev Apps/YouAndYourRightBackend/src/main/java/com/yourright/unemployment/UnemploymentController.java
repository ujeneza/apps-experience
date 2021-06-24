package com.yourright.unemployment;

import com.yourright.unemployment.models.UnemploymentAllowance;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class UnemploymentController {
   private final InsertUnemploymentStatement insertStatement;
   private final SelectUnemploymentAllowancesStatement selectStatement;

    public UnemploymentController( InsertUnemploymentStatement insertUnemploymentStatement , SelectUnemploymentAllowancesStatement selectStatement ) {
        this.insertStatement = insertUnemploymentStatement;
        this.selectStatement = selectStatement;
    }

    @PostMapping("unemployment")
    Unemployment insertUnemployment(@RequestBody Unemployment unemployment) {
        System.out.println(unemployment);
        insertStatement.insert(unemployment);
        return unemployment;
    }

    @GetMapping("unemployment/{id}")
    List<UnemploymentAllowance>  selectUnemployment( @PathVariable Long id) {
      return selectStatement.unemploymentAllowances(id);
    }
}
