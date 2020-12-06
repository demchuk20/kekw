import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../models/task';
import {Observable} from 'rxjs';
import {Urls} from '../const/urls';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public create_task(imageUrl: string): Observable<Task> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + localStorage.getItem('access')   // this is our token from the UserService (see Part 1)
    //   })
    // };
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('access')   // this is our token from the UserService (see Part 1)
      })
    };
    return this.httpClient.post<Task>(Urls.CREATE_TASK, {image_url: imageUrl}, httpOptions);
  }

}
