package com.chatbot.ChatBot.service;

import com.chatbot.ChatBot.model.ChatBot;
import com.chatbot.ChatBot.repository.ChatBotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatBotService {

    @Autowired
    ChatBotRepository chatBotRepository;

    public ChatBot createChatBot(ChatBot chatBot){
       return this.chatBotRepository.save(chatBot);
    }
    public void deleteChatBot(Long id){
        this.chatBotRepository.deleteById(id);
    }
    public List<ChatBot> findAllChatbots(){
        return this.chatBotRepository.findAll();
    }
}
