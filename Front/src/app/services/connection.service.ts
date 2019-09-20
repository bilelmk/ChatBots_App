import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  login(username : string , password : string) : Observable<any>{
    return this.http.post('user/logIn' ,{username , password} );
  }


}