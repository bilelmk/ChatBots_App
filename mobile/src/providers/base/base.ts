import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Connaissance} from "../../classes/connaissance";
import {Observable} from "rxjs";

/*
  Generated class for the BaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseProvider {

  path :String = 'http://localhost:8181/' ;

  constructor(public http: HttpClient) {}

  getConnaissances() : Observable<Connaissance[]>{
    return this.http.get<Connaissance[]>(this.path + 'knowledgeBase' );
  }
  postConnaissance(cn: Connaissance) : Observable<Connaissance>{
    return this.http.post<Connaissance>(this.path + 'knowledgeBase' , cn );
  }

  DeleteConnaissance(id : number) {
    return this.http.delete(this.path + 'knowledgeBase/'+id );
  }


  putConnaissance(cn : Connaissance) {
    return this.http.put(this.path + 'knowledgeBase' , cn );
  }

  DeleteCnFromBot(cn: number , bot : number){
    return this.http.delete(this.path + 'knowledgeBase/chatbot/'+cn+'?chatbot='+bot)
  }

  AddCnToBot(cn: number , bot : number){
    return this.http.post(this.path + 'knowledgeBase/'+cn+'?chatbot='+bot ,{})
  }
}
