import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVERADDRESS} from '../setting';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  // 用户登录
  userLogin(user: any): Observable<any> {
    const loginUrl = SERVERADDRESS + '/login';
    return this.http.post<any>(loginUrl, user, { withCredentials: true,
      headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .pipe();
  }
}
