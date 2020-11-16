import { Component } from '@angular/core';
import {IUser} from './user';

@Component({
  selector: 'app-root',
  templateUrl: '../../app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public user: IUser;
}
