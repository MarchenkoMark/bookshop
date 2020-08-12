import { Component } from '@angular/core';
import {Merch} from './merch';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent {
  items = [
    new Merch('LANDAU', '$30', './assets/img/landau.jpg'),
    new Merch('FEYNMAN', '$20', './assets/img/feynman.jpg'),
    new Merch('Hawking', '$100', './assets/img/hoking.jpg'),
  ]
}
