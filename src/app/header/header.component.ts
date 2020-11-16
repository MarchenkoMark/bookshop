import { Component, Output, EventEmitter } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';
import {BookService} from '../book.service';
import {IBook} from '../book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  private DEFAULT_VALUE: string = "Guest: log in";
  private LOGGED_VALUE: string = "log out";
  public isLogged: boolean;
  public isActive: boolean;
  public buttonText: string = this.DEFAULT_VALUE;
  private searchText: string = "";
  private bookList: IBook[];

  constructor(public _userService: UserService, public _bookService: BookService, private router: Router) {
    this._bookService.getBooks()
      .subscribe(data => this.bookList = data);
  }

  open() {
    if(this.isLogged) {
      console.log("here");
      this.setUser(null);
      this.buttonText = this.DEFAULT_VALUE;
      this.isLogged = false;
      return;
    }
    this.isActive = true;
  }

  setUser(user: IUser) {
    this._userService.setUser(user);
  }

  @Output() sendUser = new EventEmitter();
  vote(user: IUser) {
    if (user.status) {
      this.buttonText = user.name + ": " + this.LOGGED_VALUE;
      this.isLogged = true;
      this.isActive = false;
      }
    this.sendUser.emit(user);
  }

  request(event: any) {
    this.searchText = event.target.value;
  }
  find() {
    console.log(this.searchText);
    for (let book of this.bookList) {
      if (book.title.toLowerCase() == this.searchText.toLowerCase()) {
        this.router.navigate(['/merch', book.id]);
      }
    }
  }
}
