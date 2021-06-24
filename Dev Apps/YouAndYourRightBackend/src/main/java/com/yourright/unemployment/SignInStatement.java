package com.yourright.unemployment;

import com.yourright.unemployment.models.UnemploymentAllowance;
import com.yourright.unemployment.models.User;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.List;


@Component
public class SignInStatement {
    private final PreparedStatement statement;

    SignInStatement( Connection connection ) {
        try {
            this.statement = connection.prepareStatement(
                    "SELECT username, first_name, last_name, password, mail  WHERE username=? AND password=?" ,
                    Statement.RETURN_GENERATED_KEYS );
        } catch ( SQLException e ) {
            throw new RuntimeException( e );
        }
    }

    List <User> user( String username , String password ) {
        try {
            statement.setString( 1 , username );
            statement.setString( 1 , password );
            var rs = statement.executeQuery();
            rs.next();

            var user = new User(
                    rs.getLong( 1 ) ,
                    rs.getString( 2 ) ,
                    rs.getString( 3 ) ,
                    rs.getString( 4 ) ,
                    rs.getString( 5 ) ,
                    rs.getString( 6 ) );

            return (List <User>) user;
        } catch ( SQLException e ) {
            throw new RuntimeException( e );
        }
    }

}
