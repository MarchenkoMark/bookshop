import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserListService {
  private _url :string = "/assets/data/users.json";

  constructor(private http: HttpClient) { }

  getTests () : Observable<IUser[]> {
      return this.http.get<IUser[]>(this._url);
  }
}
