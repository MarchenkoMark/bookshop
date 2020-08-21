import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';
import {UserService} from '../user.service';
import {IUser} from '../user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public userList = [];
  public user: IUser;
  public data;
  public isActive: boolean;

  constructor(private _testService: TestService, private _userService: UserService) {
    this._testService.getTests()
        .subscribe( data => this.userList = data);
    this._userService.getUser()
        .subscribe(data => {
          this.data = data;
          this.getUser(this.data)
        });
  }

  ngOnInit(): void {
  }

  getUser(user: IUser) {
    this.user = user;

    if (user == null) {
      console.log("user deleted");
      this.isActive = false;
    } else this.isActive = true;
  }

}
