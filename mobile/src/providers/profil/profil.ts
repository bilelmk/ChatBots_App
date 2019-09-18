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

  constructor(public http: HttpClient) {
    console.log('Hello ProfilProvider Provider');
  }

  getProfils() : Observable<Profil[]>{
    return this.http.get<Profil[]>('http://localhost:8181/profil' );
  }

  postProfil(profil: Profil) : Observable<Profil>{
    return this.http.post<Profil>('http://localhost:8181/profil' , profil );
  }

  DeleteProfil(id : number) {
    return this.http.delete('http://localhost:8181/profil/'+id );
  }


  putProfil(profil: Profil) {
    return this.http.put('http://localhost:8181/profil' , profil );
  }

}
