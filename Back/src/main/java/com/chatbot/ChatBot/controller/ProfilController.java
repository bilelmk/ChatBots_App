package com.chatbot.ChatBot.controller;

import com.chatbot.ChatBot.model.Profil;
import com.chatbot.ChatBot.service.ProfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("profil")
public class ProfilController {

    @Autowired
    ProfilService profilService;

    @GetMapping
    public List<Profil> getAllProfils(){
        return this.profilService.getAllProfils();
    }
    @PostMapping
    public Profil createProfil(@RequestBody Profil profil){
        return this.profilService.createProfil(profil);
    }
    @DeleteMapping("{id}")
    public void deleteProfil(@PathVariable Long id){
        this.profilService.deleteProfil(id);
    }
    @PutMapping
    public Profil editProfil(@RequestBody Profil profil){
      return this.profilService.createProfil(profil);
    }
}
