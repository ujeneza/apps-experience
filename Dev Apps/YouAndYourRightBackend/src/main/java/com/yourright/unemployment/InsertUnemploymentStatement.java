package com.yourright.unemployment;

import org.springframework.stereotype.Component;

import java.sql.*;
import java.time.LocalDate;

@Component
public class InsertUnemploymentStatement {
    private final PreparedStatement statement;

    InsertUnemploymentStatement( Connection connection ) {
        try {
            this.statement = connection.prepareStatement(
                    "INSERT INTO unemployment (start_date, gross_salary,  family_status_id) VALUES (?, ?, ?)" ,
                    Statement.RETURN_GENERATED_KEYS );
        } catch ( SQLException e ) {
            throw new RuntimeException( e );
        }
    }

    void insert(Unemployment unemployment) {
        try {
            statement.setObject(1, unemployment.startDate, Types.DATE );
            statement.setBigDecimal(2,unemployment.grossSalary);
            statement.setLong(3,unemployment.familyStatusId);
            statement.executeUpdate();
            var rs = statement.getGeneratedKeys();
            rs.next();
            unemployment.id = rs.getLong(1);
        }
        catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
