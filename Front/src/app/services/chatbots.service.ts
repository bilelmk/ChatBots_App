import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chatbot} from '../classes/chatbot';

@Injectable({
  providedIn: 'root'
})
export class ChatbotsService {

  constructor(private http: HttpClient) { }

  getChatbots() : Observable<Chatbot[]>{
    return this.http.get<Chatbot[]>('chatbot' );
  }
  postChatbots(chatbot: Chatbot) : Observable<Chatbot>{
    return this.http.post<Chatbot>('chatbot' , chatbot );
  }

  DeleteChatbots(id : number) {
    return this.http.delete('chatbot/'+id );
  }


  putChatbots(chatbot : Chatbot) {
    return this.http.put('chatbot' , chatbot );
  }
}
