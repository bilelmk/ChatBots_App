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

  path :String = 'http://localhost:8181/' ;

  constructor(public http: HttpClient) {
    console.log('Hello GroupeProvider Provider');
  }
  getGroupes() : Observable<Groupe[]>{
    return this.http.get<Groupe[]>(this.path + 'group' );
  }

  async getGroupesBots() {
    let bots =[] ;
    await this.http.get<Groupe[]>(this.path + 'group' ).subscribe(
      res => {
        for(let grp of res){
          if(grp.chatBot != null){
            bots.push(grp.chatBot.id)

          }
        }
      }
    );
    return bots
  }

  postGroupe(groupe: Groupe) : Observable<Groupe>{
    return this.http.post<Groupe>(this.path + 'group' , groupe );
  }

  DeleteGroupe(id : number) {
    return this.http.delete(this.path + 'group/'+id );
  }

  putGroupe(grp : Groupe) {
    return this.http.put(this.path + 'group' , grp );
  }
}
