package com.chatbot.ChatBot.service;

import com.chatbot.ChatBot.exception.ValidationException;
import com.chatbot.ChatBot.model.ChatBot;
import com.chatbot.ChatBot.model.Groupe;
import com.chatbot.ChatBot.repository.ChatBotRepository;
import com.chatbot.ChatBot.repository.GroupeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ChatBotService {

    @Autowired
    ChatBotRepository chatBotRepository;

    @Autowired
    GroupeRepository groupeRepository;

    public ChatBot createChatBot(ChatBot chatBot){
       return this.chatBotRepository.save(chatBot);
    }
    public void deleteChatBot(Long id){
        ChatBot chatBot=chatBotRepository.findById(id).orElseThrow(()-> new ValidationException("ChatBot not exist"));
        if(chatBot.getGroupe()!=null){
            Groupe groupe=groupeRepository.findById(chatBot.getGroupe().getId()).orElseThrow(()-> new ValidationException("ChatBot not exist"));
            groupe.setChatBot(null);
            groupeRepository.save(groupe);
        }
        this.chatBotRepository.deleteById(id);
    }
    public List<ChatBot> findAllChatbots(){
        return this.chatBotRepository.findAll();
    }

    public ChatBot updateChatBot(ChatBot chatBotDetails) {
        ChatBot chatBot=this.chatBotRepository.findById(chatBotDetails.getId()).orElseThrow(()->new ValidationException("chatbot not found"));
        chatBot.setActive(chatBotDetails.isActive());
        chatBot.setDescription(chatBotDetails.getDescription());
        chatBot.setName(chatBotDetails.getName());
        return this.chatBotRepository.save(chatBot);
    }
}
