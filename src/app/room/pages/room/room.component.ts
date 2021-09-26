import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SocketService } from 'src/app/core/services/socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public id!: string;

  constructor(private router: ActivatedRoute, private socket: SocketService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      // Request songs
    })
  }
}
