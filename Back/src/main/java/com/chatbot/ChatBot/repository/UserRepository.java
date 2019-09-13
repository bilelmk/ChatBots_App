package com.chatbot.ChatBot.repository;

import com.chatbot.ChatBot.model.Profil;
import com.chatbot.ChatBot.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    List<User> findByUsername(String username);
    @Override
    List<User> findAll();

    List<User>  findByProfilId(Long id);
}
