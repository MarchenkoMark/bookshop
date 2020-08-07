import { Component, OnInit } from '@angular/core';
import {BannerItem} from './banner-item';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css', '../app.component.css']
})
export class BannerComponent {

  banners = [
    new BannerItem("Newest rocket science lectures", "Legendary Neil Tyson's heuristics lectures", "./assets/img/banner.png", "#"),
    new BannerItem("Some other lecture", "One more legendary physics tutorial via same link omg", "./assets/img/banner.png", "#"),
  ]
}
