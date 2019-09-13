import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profil} from '../classes/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  getProfils() : Observable<Profil[]>{
    return this.http.get<Profil[]>('profil' );
  }

  postProfil(profil: Profil) : Observable<Profil>{
    return this.http.post<Profil>('profil' , profil );
  }

  DeleteProfil(id : number) {
    return this.http.delete('profil/'+id );
  }


  putProfil(profil: Profil) {
    return this.http.put('profil' , profil );
  }


}
