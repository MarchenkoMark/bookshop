import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books: IBook[];
  public id: number;
  public first: boolean;
  public last: boolean;
  public isDisabled: boolean;

  constructor(private _bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this._bookService.getBooks()
      .subscribe(data => this.books = data);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>
      this.id = parseInt(params.get('id'))
    )
  }

  goNext() {


    if (this.id >= this.books.length) return;
    let nextId = this.id + 1;
    this.router.navigate(['/merch', nextId]);
  }
  goPrev() {
    if (this.id <= 1) return;
    let prevId = this.id - 1;
    this.router.navigate(['/merch', prevId]);
  }
}
