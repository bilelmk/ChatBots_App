package com.chatbot.ChatBot.repository;

import com.chatbot.ChatBot.model.Groupe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface GroupeRepository extends CrudRepository<Groupe,Long> {

    @Override
    List<Groupe> findAll();
}
