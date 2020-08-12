import { Component } from '@angular/core';
import {BannerItem} from './banner-item';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css', '../app.component.css']
})
export class BannerComponent {

  banners = [
    new BannerItem("Newest computer science lectures", "Legendary Richard Feynman's heuristics lectures", "./assets/img/banner.png", "https://www.youtube.com/watch?v=EKWGGDXe5MA"),
    new BannerItem("Car seat headrest", "Music, that I used to listen while writing this gorgeous website ", "./assets/img/car-seat-headrest.png", "https://www.youtube.com/watch?v=KbDNP9R23h4"),
  ]
}
