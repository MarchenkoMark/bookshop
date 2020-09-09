import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './book';


@Injectable({
  providedIn: 'root'
})

export class BookService {
  private _url: string = "http://localhost:8080/books";

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this._url);
  }
}
