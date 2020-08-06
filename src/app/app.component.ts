import { Component } from '@angular/core';
import {Hero} from './hero';
import {User} from './modal/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( ) { }


  public goToAccount() {
    this.mainPage = false;
    this.accountPage = true;
    console.log("hey");
    console.log(this.mainPage);
  }

  mainPage: boolean = true;
  accountPage: boolean = true;
}
