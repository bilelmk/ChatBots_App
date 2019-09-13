package com.chatbot.ChatBot.service;

import com.chatbot.ChatBot.exception.ValidationException;
import com.chatbot.ChatBot.model.Groupe;
import com.chatbot.ChatBot.model.User;
import com.chatbot.ChatBot.repository.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class GroupeService {

    @Autowired
    GroupeRepository groupeRepository;

    public Groupe createGroup(Groupe group){
        return this.groupeRepository.save(group);
    }
    public void deleteGroup(Long id)
    {
        this.groupeRepository.deleteById(id);
    }
    public List<Groupe> allGroups(){
        return  groupeRepository.findAll();
    }
    public List<User> findUsersByGroupeId(Long id){
        return groupeRepository.findById(id).orElseThrow(() -> new ValidationException("the groupe with the id %s not found"+id)).getUsers();

    }
}
