import { Component } from '@angular/core';
import {User} from './modal/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public user: User;

  public goToAccount(bool: boolean) {
    this.mainPage = bool;
    this.accountPage = !bool;
    console.log("hey");
  }



  mainPage: boolean = true;
  accountPage: boolean = false;
}
