package com.chatbot.ChatBot.controller;

import com.chatbot.ChatBot.model.Groupe;
import com.chatbot.ChatBot.model.User;
import com.chatbot.ChatBot.service.GroupeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.jws.soap.SOAPBinding;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("group")
public class GroupController {

    @Autowired
    GroupeService groupeService;

    @GetMapping
    public List<Groupe> getAllGroups(){
        return groupeService.allGroups();
    }
    @GetMapping("{id}")
    public List<User> findUsersByGroupeId(@PathVariable Long id){
        return groupeService.findUsersByGroupeId(id);
    }
    @PostMapping
    public Groupe createGroupe(@RequestBody  Groupe groupe){
        return groupeService.createGroup(groupe);
    }
    @PutMapping
    public Groupe editGroupe(@RequestBody  Groupe groupe){
        return groupeService.createGroup(groupe);
    }
    @DeleteMapping("{id}")
    public void deleteGroupe(@PathVariable Long id){
        groupeService.deleteGroup(id);
    }
}
