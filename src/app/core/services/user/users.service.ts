import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/shared/models/user';
@Injectable()
export class UsersService {

constructor(private http: HttpClient) { }


getUsers():Observable<Users[]>{

  return this.http.get<Users[]>(environment.APIURL+"/users");

}

}
