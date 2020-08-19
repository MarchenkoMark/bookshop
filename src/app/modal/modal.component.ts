import {Component, Output, EventEmitter} from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  private username: string;
  private password: string;
  private currentUser: User;

  users: User[] = [
    new User("admin", "admin"),
    new User("mark", "mark"),
  ]

  usernameHandler(event: any) {
    this.username = event.target.value;
  }

  passwordHandler(event: any) {
    this.password = event.target.value;
  }

  @Output() public sender = new EventEmitter();
  getInfo() {
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].username === this.username && this.users[i].password === this.password) {
        this.users[i].status = true;
        this.currentUser = this.users[i];
      }
    }
    console.log("User \"" + this.currentUser.username + "\" logged in");
    this.sender.emit(this.currentUser);
  }

}
