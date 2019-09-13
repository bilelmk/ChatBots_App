package com.chatbot.ChatBot.controller;

import com.chatbot.ChatBot.model.KnowledgeBase;
import com.chatbot.ChatBot.service.KnowledgeBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("knowledgeBase")
public class KnowledgeBaseController {

    @Autowired
    KnowledgeBaseService knowledgeBaseService;

    @GetMapping
    public List<KnowledgeBase> findAllKnowledgeBases(){
        return this.knowledgeBaseService.findAllKnowledgeBases();
    }

    @PostMapping
    public KnowledgeBase createKnowledgeBase(@RequestBody KnowledgeBase knowledgeBase){
        return this.knowledgeBaseService.createKnowledgeBase(knowledgeBase);
    }

    @PutMapping
    public KnowledgeBase editKnowledgeBase(@RequestBody KnowledgeBase knowledgeBase){
        return this.knowledgeBaseService.createKnowledgeBase(knowledgeBase);
    }

    @DeleteMapping("{id}")
    public void deleteKnowledgeBase(@PathVariable Long id){
        this.knowledgeBaseService.deleteKnowledgeBase(id);
    }

    @PostMapping("{id}")
    public KnowledgeBase addKnowledgeBaseToChatbot(@PathVariable("id") Long idKN,@RequestParam("chatbot") Long idCB){
        return this.knowledgeBaseService.addKnowledgeBaseToChatbot(idKN,idCB);
    }
    @DeleteMapping("chatbot/{id}")
    public KnowledgeBase deleteKnowledgeBaseToChatbot(@PathVariable("id") Long idKN,@RequestParam("chatbot") Long idCB){
        return this.knowledgeBaseService.deleteKnowledgeBaseFromChatbot(idKN,idCB);
    }
}
