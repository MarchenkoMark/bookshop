import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public bookList = [];


  constructor(private _bookService: BookService) {
    this._bookService.getBooks()
      .subscribe(data => this.bookList = data);
  }
  getBook() : IBook {
    return this.bookList[0];
  }
  ngOnInit(): void {
  }

}
