import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( ) { }

  message;

  public goToAccount(bool: boolean) {
    this.mainPage = bool;
    this.accountPage = !bool;
    console.log("hey");
  }

  mainPage: boolean = true;
  accountPage: boolean = false;
}