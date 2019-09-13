package com.chatbot.ChatBot.controller;

import com.chatbot.ChatBot.model.ChatBot;
import com.chatbot.ChatBot.service.ChatBotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("chatbot")
public class ChatBotController {

    @Autowired
    ChatBotService chatBotService;

    @GetMapping
    public List<ChatBot> findAllChatbots(){
        return this.chatBotService.findAllChatbots();
    }
    @PostMapping
    public ChatBot createChatBot(@RequestBody ChatBot chatBot){
        return this.chatBotService.createChatBot(chatBot);
    }
    @PutMapping
    public ChatBot editChatBot(@RequestBody ChatBot chatBot){
        return this.chatBotService.createChatBot(chatBot);
    }
    @DeleteMapping("{id}")
    public void deleteChatBot(@PathVariable Long id){
        this.chatBotService.deleteChatBot(id);
    }
}
