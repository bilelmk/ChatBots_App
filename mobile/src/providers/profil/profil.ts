import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Profil} from "../../classes/profil";
import {Observable} from "rxjs";

/*
  Generated class for the ProfilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfilProvider {

  path :String = 'http://localhost:8181/' ;

  constructor(public http: HttpClient) {}

  getProfils() : Observable<Profil[]>{
    return this.http.get<Profil[]>(this.path +'profil' );
  }

  postProfil(profil: Profil) : Observable<Profil>{
    return this.http.post<Profil>(this.path +'profil' , profil );
  }

  DeleteProfil(id : number) {
    return this.http.delete(this.path +'profil/'+id );
  }


  putProfil(profil: Profil) {
    return this.http.put(this.path +'profil' , profil );
  }

}
