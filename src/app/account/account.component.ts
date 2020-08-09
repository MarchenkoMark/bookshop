import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public userList = [];


  constructor(private _testService: TestService) {
    this._testService.getTests()
        .subscribe( data => this.userList = data);
  }

  ngOnInit(): void {
  }

}
