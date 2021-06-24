package com.yourright.unemployment;
import com.yourright.unemployment.models.UnemploymentPeriod;
import com.yourright.unemployment.models.UnemploymentAllowance;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Component
public class SelectUnemploymentAllowancesStatement {
    private final PreparedStatement statement;

    SelectUnemploymentAllowancesStatement( Connection connection) {
        try {
            this.statement = connection.prepareStatement("SELECT id, start_date, gross_salary, family_status_id FROM unemployment WHERE id=?");
        }
        catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    List<UnemploymentAllowance> unemploymentAllowances( Long id) {
        try {
            statement.setLong(1, id);
            var rs = statement.executeQuery();
            rs.next();
            var unemployment = new Unemployment(
                    rs.getLong(1),
                    rs.getObject( 2, LocalDate.class),
                    rs.getBigDecimal(3),
                    rs.getLong( 4));
            var startDate = unemployment.startDate;

            var allowances = new ArrayList<UnemploymentAllowance>(  );
            var sundaysOfMonth = this.numberOfSunday(startDate);




            YearMonth ym = YearMonth.from( startDate ) ;
            var firstOfNextMonth = ym.plusMonths( 1 ).atDay( 1 ) ;
            long daysOfFirstMonth = ChronoUnit.DAYS.between( startDate ,  firstOfNextMonth ) ;
            System.out.println( daysOfFirstMonth + " days between " + startDate + " and " + firstOfNextMonth ) ;


//            var firstPeriodUnemployment = UnemploymentPeriod.FIRST;
//            var secondPeriodUnemployment = UnemploymentPeriod.SECOND;
//            var thirdPeriodUnemployment = UnemploymentPeriod.THIRD;

            for (var x = 0; x<= 11; x++) {

                var month = startDate.plusMonths(x).getMonth();
                var year  = startDate.plusMonths(x).getYear();
                var grossSalary =  unemployment.grossSalary;


                BigDecimal unemploymentAllowance;


                UnemploymentPeriod period;
                if (x <= 2) {
                    period = UnemploymentPeriod.FIRST;
                } else if (x <= 5) {
                    period = UnemploymentPeriod.SECOND;
                }
                else {
                    period = UnemploymentPeriod.THIRD;
                }

                // if(x<=2) {
                   var  unemploymentAllowanceCeiling = period.allowanceCeiling;
                    if(grossSalary.compareTo(unemploymentAllowanceCeiling)<=0 ) {
                        if(grossSalary.multiply(period.ratePerMonth ).compareTo(period.minAllowancePerMonth)<=0) {
                            unemploymentAllowance = period.minAllowancePerMonth;
                        }
                        else {
                            unemploymentAllowance= grossSalary.multiply(period.ratePerMonth );
                        }
                    } else{
                        unemploymentAllowance= unemploymentAllowanceCeiling.multiply(period.ratePerMonth );
                    }


                var unemploymentAllowanceData = new UnemploymentAllowance( unemployment.id,year,month,unemploymentAllowance );
                allowances.add( unemploymentAllowanceData );

               // System.out.println(unemploymentAllowanceData.id +"month" +unemploymentAllowanceData.month +"year" +unemploymentAllowanceData.year +"allowance" +unemploymentAllowanceData.unemploymentAllowance);
            }
           return allowances;

        }
        catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

    int numberOfSunday(LocalDate startDate) {
        var dayOfWeek= startDate.getDayOfWeek().getValue();
        var lengthOfMonth = startDate.lengthOfMonth();
        var dayOfMonth = startDate.getDayOfMonth();
        var nextSunday= dayOfMonth +(7-dayOfWeek);
        var sundaysOfMonth = 0;
        if(nextSunday <=lengthOfMonth) {
            sundaysOfMonth = ((lengthOfMonth - nextSunday) /7) +1;
        } else {
            sundaysOfMonth = 0;
        }


        System.out.println(sundaysOfMonth);
        System.out.println("sundaysOfMonth");
        return sundaysOfMonth;
    }
}
