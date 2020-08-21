import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IUser} from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user = new Subject();


  getUser() {
    return this.user;
  }

  setUser(user: IUser) {
    this.user.next(user);
  }
}
