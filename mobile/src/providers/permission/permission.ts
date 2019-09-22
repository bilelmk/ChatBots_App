import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PermissionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PermissionProvider {

  admin : boolean ;
  grp : boolean ;
  constructor(public http: HttpClient) {
  }

}
