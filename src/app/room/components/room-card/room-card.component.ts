import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/core/services/socket.service';
import { SongQueueService } from 'src/app/song/services/song-queue.service';
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

  constructor(private room: RoomService, private router: Router, private socket: SocketService) { }

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

  public access() {
    this.room.getAccess(this.id)
      .subscribe({
        next: res => {
          if (res.status) {
            if (res.canEmit) {
              
              this.socket.emit('access-room', this.id);

              setTimeout(() => {
                this.router.navigate([`/room/${this.id}`])
              }, 100)

            }          

          } else {
            alert(res.reason)
          }
        },
        error: err => {
          throw err;
        }
      })
  }

}
