package com.chatbot.ChatBot.repository;

import com.chatbot.ChatBot.model.Notification;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NotificationRepository extends CrudRepository<Notification,Long> {

    @Override
    List<Notification> findAll();
}
