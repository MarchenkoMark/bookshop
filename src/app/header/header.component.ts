import { Component, Output, EventEmitter } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  private DEFAULT_VALUE: string = "log in";
  private LOGGED_VALUE: string = "log out";
  private GUEST: string = "Guest";
  public isLogged: boolean;
  public isActive: boolean;
  public buttonText: string = this.GUEST + ": " + this.DEFAULT_VALUE;

  constructor(public _userService: UserService) { }

  open() {
    if(this.isLogged) {
      console.log("here");
      this.setUser(null);
      this.buttonText = this.GUEST + ": " +  this.DEFAULT_VALUE;
      this.isLogged = !this.isLogged;
      return;
    }
    this.isActive = true;
  }

  setUser(user: IUser) {
    this._userService.setUser(user);
  }

  @Output() sendUser = new EventEmitter();
  vote(user: IUser) {
    if (user.status) {
      this.buttonText = user.name + ": " + this.LOGGED_VALUE;
      this.isLogged = true;
      this.isActive = false;
      }
    this.sendUser.emit(user);
  }
}
