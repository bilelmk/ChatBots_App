import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Groupe} from '../classes/groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http: HttpClient) { }

  getGroupes() : Observable<Groupe[]>{
    return this.http.get<Groupe[]>('group' );
  }
  postGroupe(groupe: Groupe) : Observable<Groupe>{
    return this.http.post<Groupe>('group' , groupe );
  }

  DeleteGroupe(id : number) {
    return this.http.delete('group/'+id );
  }


  putGroupe(grp : Groupe) {
    return this.http.put('group' , grp );
  }
}
