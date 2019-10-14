import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {SansReponse} from '../classes/SansReponse';

@Injectable({
  providedIn: 'root'
})
export class SansrepService {

  constructor(private http: HttpClient) { }

  getSansRepQuestions() : Observable<SansReponse[]>{
    return this.http.get<SansReponse[]>('notif' );
  }
  postSansRepQuestion(question: SansReponse) : Observable<SansReponse>{
    return this.http.post<SansReponse>('notif' , question );
  }

  DeleteSansRepQuestion(id : number) {
    return this.http.delete('notif/'+id );
  }

}
