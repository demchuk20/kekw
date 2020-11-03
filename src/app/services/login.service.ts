import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Urls} from '../const/urls';
import {Tokens} from '../models/tokens';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public register(user: User): Observable<User> {
    return this.httpClient.post<User>(Urls.REGISTER, user);
  }

  public login(email: string, password: string): Observable<Tokens> {
    return this.httpClient.post<Tokens>(Urls.LOGIN, {email, password});
  }

  public getAccessToken(refresh: string): Observable<string> {
    return this.httpClient.post<string>(Urls.ACCESS_TOKEN, refresh);
  }

  // tslint:disable-next-line:variable-name
  public updateUser(id: number, first_name: string, last_name: string, token: string): Observable<any> {
    const heads = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.put<any>(Urls.USER_UPDATE + id + '/', {first_name, last_name}, {headers: heads});
  }

  public deleteUser(id: number, token: string): Observable<any> {
    const heads = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.delete<any>(Urls.USER_DELETE + id + '/', {headers: heads});
  }

}
