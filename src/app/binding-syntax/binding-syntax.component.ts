import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-syntax',
  templateUrl: './binding-syntax.component.html',
  styleUrls: ['./binding-syntax.component.css'],
})
export class BindingSyntaxComponent {
  hotelName = 'The big company';
  numberOfRooms = 10;
  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
