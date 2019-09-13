package com.chatbot.ChatBot.repository;

import com.chatbot.ChatBot.model.ChatBot;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ChatBotRepository extends CrudRepository<ChatBot,Long> {

    @Override
    List<ChatBot> findAll() ;
}
