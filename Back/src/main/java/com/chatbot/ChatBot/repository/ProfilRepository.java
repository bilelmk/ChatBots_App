package com.chatbot.ChatBot.repository;

import com.chatbot.ChatBot.model.Profil;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProfilRepository extends CrudRepository<Profil,Long> {

    @Override
    List<Profil> findAll();
}
