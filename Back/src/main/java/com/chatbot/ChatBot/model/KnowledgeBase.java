package com.chatbot.ChatBot.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class KnowledgeBase {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long id;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("admin")
    private String Admin;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("isActive")
    private boolean isActive;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Type(type="text")
    private String question;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Type(type="text")
    private String reponse;

    @ManyToMany(fetch=FetchType.EAGER,cascade = {CascadeType.MERGE})
    @JsonIgnoreProperties("knowledgeBases")
    private List<ChatBot> chatBots=new ArrayList<>();

}
