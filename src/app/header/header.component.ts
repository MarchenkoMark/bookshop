import {Component, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';
import {User} from '../modal/user';
import {IUser} from '../user';
import {UserService} from '../user.service';
import {TestService} from '../test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //private dialog: MatDialog
  //public user: User;
  public isActive: boolean;
  public isLogged: string = "log in";

  constructor(public userService: UserService) { }

  onCreate() {
    //this.dialog.open(ModalComponent);
    if(this.isLogged == "log out") {
      this.setUser(null);
      this.isLogged = "log in";
      return;
    }
    this.isActive = true;
  }

  setUser(user: IUser) {
    this.userService.setUser(user);
  }

  @Output() sendUser = new EventEmitter();
  vote(user: IUser) {
    if (user.status) {
      this.isLogged = "log out";
      this.isActive = false;
      }
    this.sendUser.emit(user);
  }


}
