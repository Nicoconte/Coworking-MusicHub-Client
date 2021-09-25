import { Component, Input, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() id: string = "";
  @Input() name: string="";
  @Input() isPublic: boolean = false;
  @Input() inviteCode: string = "";

  constructor(private room: RoomService) { }

  ngOnInit(): void {
  }

  public joinRoom() {

    let body = {}

    if (!this.isPublic) {
      let password = prompt("Introduce the password");

      if (!password) {
        throw "Password cannot be null";
      }
      
      body = {
        "password": password
      }

      this.room.join(this.id, body)
        .subscribe({
          next: res => {
            if (res.status) {
              alert("Welcome to " + this.name)
            } else {
              alert(res.reason);
            }
          },
          error: err => {
            throw err;
          }
        })

        return;
    }

    this.room.join(this.id)
    .subscribe({
      next: res => {
        if (res.status) {
          alert("Welcome to " + this.name)
        } else {
          alert(res.reason);
        }
      },
      error: err => {
        throw err;
      }
    })

  }

}
