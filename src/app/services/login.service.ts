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
  constructor(
    private httpClient: HttpClient
  ) {
  }

  public register(user: User): Observable<User> {
    return this.httpClient.post<User>(Urls.REGISTER, user);
  }

  public login(email: string, password: string): Observable<Tokens> {
    localStorage.setItem('isLogged', 'true');
    return this.httpClient.post<Tokens>(Urls.LOGIN, {email, password});
  }

  public getAccessToken(refresh: string): Observable<string> {
    return this.httpClient.post<string>(Urls.ACCESS_TOKEN, refresh);
  }

  // tslint:disable-next-line:variable-name
  public updateUser(id: number, first_name: string, last_name: string, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token   // this is our token from the UserService (see Part 1)
      })
    };
    return this.httpClient.put<any>(Urls.USER_UPDATE + id + '/', {first_name, last_name}, httpOptions);
  }

  public deleteUser(id: number, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token   // this is our token from the UserService (see Part 1)
      })
    };
    return this.httpClient.delete<any>(Urls.USER_DELETE + id + '/', httpOptions);
  }

  // public getInfo(): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + localStorage.getItem('access')   // this is our token from the UserService (see Part 1)
  //     })
  //   };
  //   return this.httpClient.get<any>('http://188cdd7456b1.ngrok.io/users/14/', httpOptions);
  // }
}
