package com.chatbot.ChatBot.service;

import com.chatbot.ChatBot.exception.ValidationException;
import com.chatbot.ChatBot.model.Notification;
import com.chatbot.ChatBot.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    NotificationRepository notificationRepository;

    public Notification createNotif(Notification notif){
        return this.notificationRepository.save(notif);
    }
    public List<Notification> getAll(){
        return  this.notificationRepository.findAll();
    }
    public void deleteNotification(Long id){
        this.notificationRepository.deleteById(id);
    }
    public Notification editNotification(Notification notif){
        Notification notification=this.notificationRepository.findById(notif.getId()).orElseThrow(()->new ValidationException("Notif not found"));
        notification.setName(notif.getName());
        notification.setQuestion(notif.getQuestion());
        return this.notificationRepository.save(notification);
    }
}
