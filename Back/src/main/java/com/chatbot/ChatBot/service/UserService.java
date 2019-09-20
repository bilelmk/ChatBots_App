package com.chatbot.ChatBot.service;

import com.chatbot.ChatBot.exception.ValidationException;
import com.chatbot.ChatBot.model.Groupe;
import com.chatbot.ChatBot.model.Profil;
import com.chatbot.ChatBot.model.User;
import com.chatbot.ChatBot.repository.GroupeRepository;
import com.chatbot.ChatBot.repository.ProfilRepository;
import com.chatbot.ChatBot.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Hex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

@Service
@Slf4j
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    GroupeRepository groupeRepository;

    @Autowired
    ProfilRepository profilRepository;

    public User createUser(User user){
      user.setPassword(hashPwd(user.getPassword()));
      return  userRepository.save(user);
    }
    public User updateUser(User userDetails){
      User user=userRepository.findById(userDetails.getId()).orElseThrow(()-> new ValidationException("user no found"));
      user.setProfil(userDetails.getProfil());
      user.setGroupes(userDetails.getGroupes());
      user.setUsername(userDetails.getUsername());
      user.setActive(userDetails.isActive());
      user.setMatricule(userDetails.getMatricule());
      user.setFirstName(userDetails.getFirstName());
      user.setPassword(userDetails.getPassword());
      user.setAdminGroup(userDetails.isAdminGroup());
      user.setEmail(userDetails.getEmail());
      user.setLastName(userDetails.getLastName());
      user.setSuperUser(userDetails.isSuperUser());
      return this.userRepository.save(user);
    }
    public User logIn(User user){
        List<User> users=userRepository.findByUsername(user.getUsername());
        if(users.size()==1) {
            User user1= users.get(0);
           if(!hashPwd(user.getPassword()).equals(user1.getPassword())) throw  new ValidationException("check your password");
            return user1;
        }
       throw  new ValidationException("user not found");
    }
    private String hashPwd(String pwd){
        try {
            String salt = "1234";
            SecretKeyFactory skf = SecretKeyFactory.getInstance( "PBKDF2WithHmacSHA512" );
            PBEKeySpec spec = new PBEKeySpec( pwd.toCharArray(), salt.getBytes(), 65536, 128);
            SecretKey key = skf.generateSecret( spec );
            byte[] res = key.getEncoded( );
            return Hex.encodeHexString(res);
        }
        catch ( NoSuchAlgorithmException | InvalidKeySpecException e ) {
            throw new RuntimeException( e );
        }
    }
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    public List<User> findAll() {
       return userRepository.findAll();
    }
    public User addUserToGroup(Long userId,Groupe groupe){
        User user=userRepository.findById(userId).orElseThrow(()->new ValidationException("the groupe with the id %s not found"+userId));
        if(user.getGroupes().contains(groupe)) throw new ValidationException("relation already exist !!");
        user.getGroupes().add(groupe);
        return  userRepository.save(user);
    }
    public void deleteUserFromGroup(Long userId,Long groupeId){
        User user=userRepository.findById(userId).orElseThrow(()->new ValidationException("the user with the id %s not found"+userId));
        Groupe groupe1=groupeRepository.findById(groupeId).orElseThrow(()->new ValidationException("the groupe with the id %s not found"+groupeId));
        if(!user.getGroupes().contains(groupe1)) throw new ValidationException("relation doesn't exist !!");
        user.getGroupes().remove(groupe1);
        userRepository.save(user);
    }
    public User addUserToProfil(Long idUser,Long idProfil){
        User user=userRepository.findById(idUser).orElseThrow(()->new ValidationException("user not found,check your id !!"));
        Profil profil=profilRepository.findById(idProfil).orElseThrow(()->new ValidationException("profil not found ,check you id"));
       if(user.getProfil()!=null){
           if(user.getProfil().getId()==idProfil) throw new ValidationException("relation already exist !!");
       }
       user.setProfil(profil);
       return userRepository.save(user);
    }

    public void deleteUserFromProfil(Long idUser, Long idProfil) {
        User user=userRepository.findById(idUser).orElseThrow(()->new ValidationException("user not found,check your id !!"));
        if(user.getProfil()==null)  throw new ValidationException("relation doesn't exist !!");
        if (user.getProfil().getId() != idProfil) throw new ValidationException("relation doesn't exist !!");
        user.setProfil(null);
        userRepository.save(user);
    }
}
