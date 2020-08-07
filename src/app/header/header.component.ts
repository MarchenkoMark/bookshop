import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private dialog: MatDialog) { }

  onCreate() {
    this.dialog.open(ModalComponent)
  }

  @Output() voted = new EventEmitter();

  vote(bool: boolean) {
    this.voted.emit(bool);
  }
}
