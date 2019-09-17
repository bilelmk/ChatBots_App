import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Connaissance} from '../classes/connaissance';

@Injectable({
  providedIn: 'root'
})
export class ConnaissanceService {

  constructor(private http: HttpClient) { }

  getConnaissances() : Observable<Connaissance[]>{
    return this.http.get<Connaissance[]>('knowledgeBase' );
  }
  postConnaissance(cn: Connaissance) : Observable<Connaissance>{
    return this.http.post<Connaissance>('knowledgeBase' , cn );
  }

  DeleteConnaissance(id : number) {
    return this.http.delete('knowledgeBase/'+id );
  }


  putConnaissance(cn : Connaissance) {
    return this.http.put('knowledgeBase' , cn );
  }

  DeleteCnFromBot(cn: number , bot : number){
    return this.http.delete('knowledgeBase/chatbot/'+cn+'?chatbot='+bot)
  }

  AddCnToBot(cn: number , bot : number){
    return this.http.post('knowledgeBase/'+cn+'?chatbot='+bot ,{})
  }
}
