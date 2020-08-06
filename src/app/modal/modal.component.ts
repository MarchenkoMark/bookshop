import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {User} from './user';

declare const check: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  private username: string;
  private password: string;

  users = [
    new User("admin", "admin"),
    new User("mark", "mark"),
  ]
  usernameHandler(event: any) {
    this.username = event.target.value;
  }

  passwordHandler(event: any) {
    this.password = event.target.value;
  }

  getInfo() {
    check(this.users, this.username, this.password)
  }
}
