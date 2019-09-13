package com.chatbot.ChatBot.controller;

import com.chatbot.ChatBot.model.Groupe;
import com.chatbot.ChatBot.model.User;
import com.chatbot.ChatBot.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("user")
@Slf4j
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(produces = "application/json")
    public List<User> allUsers(){
        List<User> users=this.userService.findAll();
       // log.info( users.get(1).getGroupes().get(0).getDescription());
        //log.info( users.get(1).getGroupes().get(0).getName());
        return users;
    }
    @PostMapping(consumes = "application/json",produces = "application/json")
    public User createUser(@RequestBody User user){
       return userService.createUser(user);
    }
    @PostMapping("logIn")
    public User logIn(@RequestBody User user){
       return userService.logIn(user);
    }
    @PutMapping
    public User editUser(User user){
        return userService.createUser(user);
    }
    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
    @PostMapping("{id}")
    public User addUserToGroup(@PathVariable Long id, @RequestBody Groupe groupe){
        return  userService.addUserToGroup(id,groupe);
    }
    @DeleteMapping("group/{id}")//     /user/group/5?groupe=2
    public void deleteUser(@PathVariable Long id,@RequestParam Long groupe){
        userService.deleteUserFromGroup(id, groupe);
    }
    @PostMapping("profil/{id}") // /user/profil/5?profil=2
    public User addUserToProfil(@PathVariable("id") Long idUser,@RequestParam("profil") Long idProfil){
        return this.userService.addUserToProfil(idUser,idProfil);
    }
    @DeleteMapping("profil/{id}") // /user/profil/5?profil=2
    public void deleteUserFromProfil(@PathVariable("id") Long idUser,@RequestParam("profil") Long idProfil){
        this.userService.deleteUserFromProfil(idUser,idProfil);
    }
}
