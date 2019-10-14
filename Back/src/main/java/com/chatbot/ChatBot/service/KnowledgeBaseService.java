package com.chatbot.ChatBot.service;

import com.chatbot.ChatBot.exception.ValidationException;
import com.chatbot.ChatBot.model.ChatBot;
import com.chatbot.ChatBot.model.KnowledgeBase;
import com.chatbot.ChatBot.repository.ChatBotRepository;
import com.chatbot.ChatBot.repository.KnowledgeBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KnowledgeBaseService {

    @Autowired
    KnowledgeBaseRepository knowledgeBaseRepository;

    @Autowired
    ChatBotRepository chatBotRepository;

    public KnowledgeBase createKnowledgeBase(KnowledgeBase knowledgeBase){
        return this.knowledgeBaseRepository.save(knowledgeBase);
    }
    public KnowledgeBase updateKnowledgeBase(KnowledgeBase baseDetails){
        KnowledgeBase knowledgeBase=knowledgeBaseRepository.findById(baseDetails.getId()).orElseThrow(()->new ValidationException("not found"));
        knowledgeBase.setQuestion(baseDetails.getQuestion());
        knowledgeBase.setReponse(baseDetails.getReponse());
        knowledgeBase.setActive(baseDetails.isActive());
        return knowledgeBaseRepository.save(knowledgeBase);
    }
    public void deleteKnowledgeBase(Long id){
        this.knowledgeBaseRepository.deleteById(id);
    }
    public List<KnowledgeBase> findAllKnowledgeBases(){
        return this.knowledgeBaseRepository.findAll();
    }

    public KnowledgeBase addKnowledgeBaseToChatbot(Long idKB,Long idCB){
        KnowledgeBase kn=knowledgeBaseRepository.findById(idKB).orElseThrow(()->new ValidationException("KnowledgeBase not found "));
        ChatBot cb=chatBotRepository.findById(idCB).orElseThrow(()->new ValidationException("ChatBot not Found"));
        if(kn.getChatBots().contains(cb)) throw new ValidationException("relation already exist");
        kn.getChatBots().add(cb);
        return knowledgeBaseRepository.save(kn);
    }
    public KnowledgeBase deleteKnowledgeBaseFromChatbot(Long idKB,Long idCB){
        KnowledgeBase kn=knowledgeBaseRepository.findById(idKB).orElseThrow(()->new ValidationException("KnowledgeBase not found "));
        ChatBot cb=chatBotRepository.findById(idCB).orElseThrow(()->new ValidationException("ChatBot not Found"));
        if(!kn.getChatBots().contains(cb)) throw new ValidationException("relation doesn't exist");
        kn.getChatBots().remove(cb);
        return knowledgeBaseRepository.save(kn);
    }
}
