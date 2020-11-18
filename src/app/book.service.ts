import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './book';


@Injectable({
  providedIn: 'root'
})

export class BookService {
  private _url: string = "http://178.158.231.25:8081/books";

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this._url);
  }
}
