import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SansReponse} from "../../classes/SansReponse";
import {Observable} from "rxjs";


@Injectable()
export class SansreponseProvider {
  path :String = 'http://localhost:8181/' ;
  constructor(private http: HttpClient) { }

  getSansRepQuestions() : Observable<SansReponse[]>{
    return this.http.get<SansReponse[]>(this.path + 'notif' );
  }
  postSansRepQuestion(question: SansReponse) : Observable<SansReponse>{
    return this.http.post<SansReponse>(this.path + 'notif' , question );
  }

  DeleteSansRepQuestion(id : number) {
    return this.http.delete(this.path +'notif/'+id );
  }
}
