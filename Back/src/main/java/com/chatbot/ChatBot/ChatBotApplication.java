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

		log.info("Start Server");
	}
}
