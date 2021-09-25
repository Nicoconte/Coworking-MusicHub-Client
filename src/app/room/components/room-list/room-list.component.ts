import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  public roomList!: [any];

  constructor(private room: RoomService) { }

  ngOnInit(): void {
    this.room.list().subscribe(res => {
      console.log(res.data)
      this.roomList = res.data
    })
  }

}
