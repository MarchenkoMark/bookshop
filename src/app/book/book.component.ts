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
  public items: IBook[];
  public id: number;

  constructor(private _bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this._bookService.getBooks()
      .subscribe(data => this.items = data);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>
      this.id = parseInt(params.get('id'))
    )
  }

  goNext() {
    let nextId = this.id + 1;
    this.router.navigate(['/merch', nextId]);
  }
  goPrev() {
    let prevId = this.id - 1;
    this.router.navigate(['/merch', prevId]);
  }
}
