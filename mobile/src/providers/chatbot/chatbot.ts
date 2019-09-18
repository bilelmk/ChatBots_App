import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Chatbot} from "../../classes/chatbot";

/*
  Generated class for the ChatbotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatbotProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ChatbotProvider Provider');
  }

  getChatbots() : Observable<Chatbot[]>{
    return this.http.get<Chatbot[]>('http://localhost:8181/chatbot' );
  }
  postChatbots(chatbot: Chatbot) : Observable<Chatbot>{
    return this.http.post<Chatbot>('http://localhost:8181/chatbot' , chatbot );
  }

  DeleteChatbots(id : number) {
    return this.http.delete('http://localhost:8181/chatbot/'+id );
  }


  putChatbots(chatbot : Chatbot) {
    return this.http.put('http://localhost:8181/chatbot' , chatbot );
  }
}
