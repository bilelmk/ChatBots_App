package com.chatbot.ChatBot.model;

import com.fasterxml.jackson.annotation.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "GROUPE")
@Getter
@Setter
public class Groupe {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long id;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String description;

    @JsonProperty("isActive")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private boolean isActive;

   @ManyToMany(mappedBy = "groupes")
   @JsonIgnoreProperties("groupes")
   @LazyCollection(LazyCollectionOption.FALSE)
   private List<User> users=new ArrayList<>();

    @OneToOne(fetch=FetchType.EAGER,cascade = {CascadeType.MERGE})
    private ChatBot chatBot;
}
