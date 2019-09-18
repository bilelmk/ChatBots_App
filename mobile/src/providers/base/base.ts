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

  constructor(public http: HttpClient) {
    console.log('Hello BaseProvider Provider');
  }
  getConnaissances() : Observable<Connaissance[]>{
    return this.http.get<Connaissance[]>('http://localhost:8181/knowledgeBase' );
  }
  postConnaissance(cn: Connaissance) : Observable<Connaissance>{
    return this.http.post<Connaissance>('http://localhost:8181/knowledgeBase' , cn );
  }

  DeleteConnaissance(id : number) {
    return this.http.delete('http://localhost:8181/knowledgeBase/'+id );
  }


  putConnaissance(cn : Connaissance) {
    return this.http.put('http://localhost:8181/knowledgeBase' , cn );
  }

  DeleteCnFromBot(cn: number , bot : number){
    return this.http.delete('http://localhost:8181/knowledgeBase/chatbot/'+cn+'?chatbot='+bot)
  }

  AddCnToBot(cn: number , bot : number){
    return this.http.post('http://localhost:8181/knowledgeBase/'+cn+'?chatbot='+bot ,{})
  }
}
