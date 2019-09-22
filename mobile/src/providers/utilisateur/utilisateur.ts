import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Utilisateur} from "../../classes/utilisateur";
import {Groupe} from "../../classes/groupe";

/*
  Generated class for the UtilisateurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilisateurProvider {

  path :String = 'http://localhost:8181/' ;

  constructor(public http: HttpClient) {}

  login(username : string , password : string) : Observable<any>{
    return this.http.post(this.path + 'user/logIn' ,{username , password} );
  }

  getUsers() : Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.path + 'user' );
  }

  postUser(user : Utilisateur) : Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.path +'user' , user );
  }

  DeleteUser(id : number) {
    return this.http.delete(this.path +'user/'+id );
  }

  putUser(user : Utilisateur) {
    return this.http.put(this.path +'/user' , user );
  }

  DeleteUserFromGroupe(user: number , grp : number){
    return this.http.delete(this.path + '/user/group/'+user+'?groupe='+grp)
  }

  AddUserToGroup(user: number , grp : Groupe){
    return this.http.post(this.path + '/user/'+user , grp)
  }

  verify(){
    return true ;
  }
}
