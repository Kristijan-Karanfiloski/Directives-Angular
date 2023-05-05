import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css'],
})
export class NgIfDirectiveComponent implements OnInit {
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 1,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  selectRoom(room: RoomList) {
    console.log(room);
  }

  ngOnInit() {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenites: 'Air Condition, Free WiFi',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1596120236172-231999844ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('11-Nov-2023'),
        checkOutTime: new Date('15-Nov-2023'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Private Suite',
        amenites: 'Air Condition, Free WiFi',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1601871925712-3c803d50fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('11-Aug-2023'),
        checkOutTime: new Date('15-Aug-2023'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenites: 'Air Condition, Free WiFi',
        price: 1500,
        photos:
          'https://images.unsplash.com/photo-1601871925712-3c803d50fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('23-Dec-2023'),
        checkOutTime: new Date('30-Dec-2023'),
        rating: 2.6,
      },
    ];
  }
}
