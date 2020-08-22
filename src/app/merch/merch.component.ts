import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent {
  public items: IBook[];

  constructor(private _bookService: BookService, private router: Router) {
    this._bookService.getBooks()
      .subscribe(data => this.items = data);
  }

  onSelect(link: number) {
    this.router.navigate(['/merch', link]);
  }
}
