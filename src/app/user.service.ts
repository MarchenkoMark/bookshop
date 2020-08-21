import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IUser} from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user = new Subject();
  private currentUser: IUser = null;

  getUser() {
    return this.user;
  }
  getCurrentUser() : IUser{
    return this.currentUser
  }
  setUser(user: IUser) {
    this.user.next(user);
    this.currentUser = user;
  }
}
