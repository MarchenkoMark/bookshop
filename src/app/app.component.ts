import { Component } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public s = [];


  constructor(private _testService: TestService) {
    this.s = _testService.getTests();
  }

  message;

  public goToAccount(bool: boolean) {
    this.mainPage = bool;
    this.accountPage = !bool;
    console.log("hey");
  }

  mainPage: boolean = true;
  accountPage: boolean = false;
}
