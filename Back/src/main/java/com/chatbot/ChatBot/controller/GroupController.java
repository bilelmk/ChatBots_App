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


    @CrossOrigin(origins = "*")
    @GetMapping
    public List<Groupe> getAllGroups(){
        return groupeService.allGroups();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("{id}")
    public List<User> findUsersByGroupeId(@PathVariable Long id){
        return groupeService.findUsersByGroupeId(id);
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public Groupe createGroupe(@RequestBody  Groupe groupe){
        return groupeService.createGroup(groupe);
    }

    @CrossOrigin(origins = "*")
    @PutMapping
    public Groupe editGroupe(@RequestBody  Groupe groupe){
        return groupeService.updateGroup(groupe);
    }


    @CrossOrigin(origins = "*")
    @DeleteMapping("{id}")
    public void deleteGroupe(@PathVariable Long id){
        groupeService.deleteGroup(id);
    }
}
