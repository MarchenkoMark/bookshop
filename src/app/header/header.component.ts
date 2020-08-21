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
  public isActive: boolean;
  public buttonText: string = this.DEFAULT_VALUE;

  constructor(public _userService: UserService) { }

  open() {
    if(this.buttonText == this.LOGGED_VALUE) {
      this.setUser(null);
      this.buttonText = this.DEFAULT_VALUE;
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
      this.buttonText = this.LOGGED_VALUE;
      this.isActive = false;
      }
    this.sendUser.emit(user);
  }
}
