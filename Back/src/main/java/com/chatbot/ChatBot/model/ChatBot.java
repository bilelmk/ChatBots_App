package com.chatbot.ChatBot.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class ChatBot {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long id;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String description;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("isActive")
    private boolean isActive;

    @OneToOne(fetch=FetchType.EAGER,mappedBy = "chatBot")
    @JsonIgnoreProperties(value = {"chatBot"} ,allowSetters = true)
    private Groupe groupe;

    @ManyToMany(mappedBy = "chatBots")
    @JsonIgnoreProperties(value = {"chatBots"} ,allowSetters = true)
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<KnowledgeBase> knowledgeBases=new ArrayList<>();


}
