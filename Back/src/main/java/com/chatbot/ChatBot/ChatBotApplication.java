package com.chatbot.ChatBot;

import com.chatbot.ChatBot.model.Groupe;
import com.chatbot.ChatBot.model.User;
import com.chatbot.ChatBot.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import sun.rmi.server.UnicastServerRef;

import java.util.Arrays;

@SpringBootApplication
@Slf4j
public class ChatBotApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(ChatBotApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	/*	User user=new User();
		user.setPassword("555");
		user.setFirstName("zmzmz");
		user.setMatricule(6685L);
		user.setUsername("mkssdk");
		user.setActive(true);
		Groupe groupe=new Groupe();
		groupe.setId(1L);
		groupe.setDescription("test amani");
		groupe.setName(
		groupe.setActive(true);
		user.setGroupes(Arrays.asList(groupe));
		userRepository.save(user);*/

		log.info("Start Server");
	}
}
