import { Component } from '@angular/core';
import {BannerService} from '../banner.service';
import {IBanner} from '../banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css', '../app.component.css']
})
export class BannerComponent {
  public bannerList : IBanner[];

  constructor(private _bannerService: BannerService) {
    this._bannerService.getBanners()
      .subscribe(banners => this.bannerList = banners);
  }
}
