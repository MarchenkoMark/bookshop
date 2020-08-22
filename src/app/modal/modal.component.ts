import {Component, Output, EventEmitter, Input} from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../user';
import {UserListService} from '../user-list.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  private username: string;
  private password: string;
  private currentUser: IUser;
  private users: IUser[];

  @Input('isActive') public isActive;


  constructor(private userService: UserService, private testService: UserListService) {
    testService.getTests().subscribe(users => this.users = users);
  }

  usernameHandler(event: any) {
    this.username = event.target.value;
  }
  passwordHandler(event: any) {
    this.password = event.target.value;
  }
  setUser(user: IUser) {
    this.userService.setUser(user);
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
  @Output() public closing = new EventEmitter();
  close() {
    this.closing.emit();
  }
}
