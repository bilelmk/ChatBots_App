import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Groupe} from '../classes/groupe';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http: HttpClient) { }

  getGroupes() : Observable<Groupe[]>{
    return this.http.get<Groupe[]>('group' );
  }

  async getGroupesBots() {
    let bots =[] ;
    await this.http.get<Groupe[]>('group' ).subscribe(
        res => {
          for(let grp of res){
            bots.push(grp.chatBot.id)
          }
        }
    );
    return bots

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
