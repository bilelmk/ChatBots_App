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


    @CrossOrigin(origins = "*")
    @GetMapping
    public List<Profil> getAllProfils(){
        return this.profilService.getAllProfils();
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public Profil createProfil(@RequestBody Profil profil){
        return this.profilService.createProfil(profil);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("{id}")
    public void deleteProfil(@PathVariable Long id){
        this.profilService.deleteProfil(id);
    }

    @CrossOrigin(origins = "*")
    @PutMapping
    public Profil editProfil(@RequestBody Profil profil){
      return this.profilService.updateProfil(profil);
    }
}
