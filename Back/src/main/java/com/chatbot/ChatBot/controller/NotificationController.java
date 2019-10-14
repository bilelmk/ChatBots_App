package com.chatbot.ChatBot.controller;

import com.chatbot.ChatBot.model.Notification;
import com.chatbot.ChatBot.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("notif")
public class NotificationController {

    @Autowired
    NotificationService notificationService;

    @GetMapping
    public List<Notification> getAll(){
        return  this.notificationService.getAll();
    }
    @PostMapping
    public Notification createNotif(@RequestBody Notification notif){
        return this.notificationService.createNotif(notif);
    }
    @PutMapping
    public Notification editNotif(@RequestBody Notification notif){
        return this.notificationService.editNotification(notif);
    }
    @DeleteMapping("{id}")
    public void deleteNotif(@PathVariable Long id){
        this.notificationService.deleteNotification(id);
    }
}
