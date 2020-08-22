import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBanner} from './banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private _url = "/assets/data/banners.json"
  constructor(private http: HttpClient) { }

  getBanners() : Observable<IBanner[]> {
    return this.http.get<IBanner[]>(this._url);
  }
}
