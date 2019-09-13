package com.chatbot.ChatBot.repository;

import com.chatbot.ChatBot.model.KnowledgeBase;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface KnowledgeBaseRepository extends CrudRepository<KnowledgeBase,Long> {

    @Override
    List<KnowledgeBase> findAll();
}
