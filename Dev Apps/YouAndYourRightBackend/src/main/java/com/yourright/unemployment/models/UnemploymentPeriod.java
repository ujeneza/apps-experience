package com.yourright.unemployment.models;

import java.math.BigDecimal;

public enum UnemploymentPeriod {
    FIRST( 3 ,  new BigDecimal( "0.65" ) , new BigDecimal( "2671.37" ) , new BigDecimal( "1736.28" ),   new BigDecimal( "1052.48" ) ,  new BigDecimal( "66.78" ) , new BigDecimal( "40.48" )  ),
    SECOND( 3 ,  new BigDecimal( "0.6" ), new BigDecimal( "2671.65" ) ,new BigDecimal( "1602.90" ),   new BigDecimal( "1052.48" ) ,  new BigDecimal( "61.65" ) , new BigDecimal( "40.48" ) ),
    THIRD( 6 ,  new BigDecimal( "0.6" ), new BigDecimal( "2489.99" ) , new BigDecimal( "1493.96" ),   new BigDecimal( "1052.48" ) ,  new BigDecimal( "57.46" ) , new BigDecimal( "40.48" )  ),
    ;

    public final int durationInMonths;
    public final BigDecimal ratePerMonth;
    public final BigDecimal allowanceCeiling;
    public final BigDecimal maxAllowancePerMonth;
    public final BigDecimal minAllowancePerMonth;
    public final BigDecimal maxAllowancePerDay;
    public final BigDecimal minAllowancePerDay;

    UnemploymentPeriod( int durationInMonths , BigDecimal ratePerMonth , BigDecimal allowanceCeiling , BigDecimal maxAllowancePerMonth , BigDecimal minAllowancePerMonth , BigDecimal maxAllowancePerDay , BigDecimal minAllowancePerDay ) {
        this.durationInMonths = durationInMonths;
        this.ratePerMonth = ratePerMonth;
        this.allowanceCeiling = allowanceCeiling;
        this.maxAllowancePerMonth = maxAllowancePerMonth;
        this.minAllowancePerMonth = minAllowancePerMonth;
        this.maxAllowancePerDay = maxAllowancePerDay;
        this.minAllowancePerDay = minAllowancePerDay;
    }
}
