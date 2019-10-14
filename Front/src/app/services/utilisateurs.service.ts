import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../classes/utilisateur';
import {Groupe} from '../classes/groupe';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>('user' );
  }

  postUser(user : Utilisateur) : Observable<Utilisateur>{
     return this.http.post<Utilisateur>('user' , user );
  }

  DeleteUser(id : number) {
    return this.http.delete('user/'+id );
  }

  putUser(user : Utilisateur) {
    return this.http.put('user' , user );
  }

  DeleteUserFromGroupe(user: number , grp : number){
    return this.http.delete('user/group/'+user+'?groupe='+grp)
  }

  AddUserToGroup(user: number , grp : Groupe){
    return this.http.post('user/'+user , grp)
}
}
