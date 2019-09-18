import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Groupe} from "../../classes/groupe";

/*
  Generated class for the GroupeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GroupeProvider Provider');
  }
  getGroupes() : Observable<Groupe[]>{
    return this.http.get<Groupe[]>('http://localhost:8181/group' );
  }

  async getGroupesBots() {
    let bots =[] ;
    await this.http.get<Groupe[]>('http://localhost:8181/group' ).subscribe(
      res => {
        for(let grp of res){
          bots.push(grp.chatBot.id)
        }
      }
    );
    return bots

  }
  postGroupe(groupe: Groupe) : Observable<Groupe>{
    return this.http.post<Groupe>('http://localhost:8181/group' , groupe );
  }

  DeleteGroupe(id : number) {
    return this.http.delete('http://localhost:8181/group/'+id );
  }

  putGroupe(grp : Groupe) {
    return this.http.put('http://localhost:8181/group' , grp );
  }
}
