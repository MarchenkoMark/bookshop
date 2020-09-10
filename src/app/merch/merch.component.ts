import {Component, OnInit} from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../book';
import { Router } from '@angular/router';
import { Selector } from './selector';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit{
  public books: IBook[];
  public currentSelector: Selector;
  public display: boolean = false;
  public selectors = [
    new Selector(0, "Popularity", true),
    new Selector(1, "Increase price", false),
    new Selector(2, "Decrease price", false),
  ];

  constructor(private _bookService: BookService, private router: Router) {
    this._bookService.getBooks()
      .subscribe(data => {
        this.books = data;
        this.display = false;
        this.display = true;
      });
  }

  ngOnInit(): void {
    this.currentSelector = this.selectors[0];
  }

  onSelect(link: number) {
    this.router.navigate(['/merch', link]);
  }

  filter(selector: Selector) {
    if (selector == this.currentSelector) return;
    this.clearSelectors();
    selector.isChosen = true;
    this.currentSelector = selector;
  }
  clearSelectors() {
    for (let selector of this.selectors) {
      selector.isChosen = false;
    }
  }

}
