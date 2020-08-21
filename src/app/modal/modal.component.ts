import {Component, Output, EventEmitter, Input} from '@angular/core';
import { User } from './user';
import {UserService} from '../user.service';
import {IUser} from '../user';
import {TestService} from '../test.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  private username: string;
  private password: string;
  private currentUser: IUser;


  constructor(private userService: UserService, private testService: TestService) {
    testService.getTests().subscribe(users => this.users = users);
  }

  @Input('isActive') public isActive;

  users: IUser[];

  usernameHandler(event: any) {
    this.username = event.target.value;
  }

  passwordHandler(event: any) {
    this.password = event.target.value;
  }

  @Output() public sender = new EventEmitter();
  getInfo() {
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].name === this.username && this.users[i].password === this.password) {
        this.users[i].status = true;
        this.currentUser = this.users[i];
      }
    }
    console.log("User \"" + this.currentUser.name + "\" logged in");
    this.sender.emit(this.currentUser);
    this.setUser(this.currentUser);
  }

  setUser(user: IUser) {
    this.userService.setUser(user);
  }

  @Output() public closing = new EventEmitter();
  close() {
    this.closing.emit();
  }
}
