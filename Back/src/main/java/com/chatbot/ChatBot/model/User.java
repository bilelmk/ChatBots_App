package com.chatbot.ChatBot.model;

import com.fasterxml.jackson.annotation.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "USERS")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long id;

    @Column(unique=true)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long matricule;

    @Column(unique = true)
    private String username;

    private String password;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String firstName;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String email;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String lastName;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("isSuperUser")
    private boolean isSuperUser;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("isActive")
    private boolean isActive;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("isAdminGroup")
    private boolean isAdminGroup;

   @ManyToMany(fetch=FetchType.EAGER,cascade = {CascadeType.MERGE})
   @JsonIgnoreProperties("users")
    private List<Groupe> groupes =new ArrayList<>() ;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "profil_id")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private  Profil profil;


}
