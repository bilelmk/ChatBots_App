package com.chatbot.ChatBot.service;

import com.chatbot.ChatBot.exception.ValidationException;
import com.chatbot.ChatBot.model.Profil;
import com.chatbot.ChatBot.model.User;
import com.chatbot.ChatBot.repository.ProfilRepository;
import com.chatbot.ChatBot.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ProfilService {

    @Autowired
    ProfilRepository profilRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    public Profil createProfil(Profil profil){
       return this.profilRepository.save(profil);
    }
    public Profil updateProfil(Profil profilDetails){
        Profil profil=this.profilRepository.findById(profilDetails.getId()).orElseThrow(()->new ValidationException("profil not found"));
        profil.setActive(profilDetails.isActive());
        profil.setDescription(profilDetails.getDescription());
        profil.setLibPermission(profilDetails.getLibPermission());
        profil.setPermisRoles(profilDetails.getPermisRoles());
        profil.setName(profilDetails.getName());
        return this.profilRepository.save(profil);
    }
    public void deleteProfil(Long id){
        List<User> profil=userRepository.findByProfilId(id);
        if(profil!=null){
            profil.forEach(item->{
                userService.deleteUserFromProfil(item.getId(),id);
            });
        }
        this.profilRepository.deleteById(id);
    }
    public List<Profil> getAllProfils(){
        return this.profilRepository.findAll();
    }

}
