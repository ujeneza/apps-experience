package com.yourright.unemployment.models;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;


public class User {

    public Long id;
    public String userName;
    public String firstName;
    public String lastName;
    public String userPassword;
    public String mail;


    public User( Long id , String userName , String firstName , String lastName , String userPassword , String mail ) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userPassword = userPassword;
        this.mail = mail;
    }



    @JsonCreator
    static User user(
            @JsonProperty("id") Long id,
            @JsonProperty(value = "userName", required = true) String userName,
            @JsonProperty(value = "firstName") String firstName,
            @JsonProperty(value = "lastName") String lastName,
            @JsonProperty(value = "userPassword") String userPassword,
            @JsonProperty(value = "mail") String mail) {
        return new User(id, userName,firstName,lastName,userPassword, mail);
    }

}
