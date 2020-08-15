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
  public currentBook: IBook;

  constructor(private _bookService: BookService) {
    this._bookService.getBooks()
      .subscribe(data => this.bookList = data);
  }
  getBook( value ) : IBook {
    return this.bookList[value];
  }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.currentBook = this.getBook(event.target.value);
  }
}
