package com.chatbot.ChatBot.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
public class Profil {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long id;

    private String name;

    private String description;

    @JsonProperty("isActive")
    private boolean isActive;

    private String libPermission;

   /* @OneToMany(mappedBy = "profil",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    List<User> users ;*/

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "profil_permis", joinColumns = @JoinColumn(name = "id"))
    @AttributeOverrides({
            @AttributeOverride(name = "permission", column = @Column(name = "permis")),
            @AttributeOverride(name = "role", column = @Column(name = "role"))
    })
    private List<PermisRole> permisRoles = new ArrayList<>();
}
