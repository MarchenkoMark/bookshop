import {Component, OnInit} from '@angular/core';
import { UserListService } from '../user-list.service';
import { UserService } from '../user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public usersList: IUser[];
  public user: IUser;
  public data;
  public isActive: boolean = true;

  constructor(private _userListService: UserListService, private _userService: UserService) {
    console.log("account constructor");
    this._userListService.getTests()
        .subscribe( data => this.usersList = data);
    this._userService.getUser()
        .subscribe(data => {
          this.data = data;
          this.setUser(this.data)
        });
  }


  setUser(user: IUser) {
    if (user != null) {
      this.user = user;
      this.isActive = true;
    } else {
      console.log('user deleted');
      this.isActive = false;
    }
  }

  ngOnInit(): void {
    this.user = this._userService.getCurrentUser();
    if (this.user == null) this.isActive = false;
  }

}
