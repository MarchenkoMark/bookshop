import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public items: IBook[];
  public id: number;

  constructor(private _bookService: BookService, private route: ActivatedRoute) {
    this._bookService.getBooks()
      .subscribe(data => this.items = data);
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
