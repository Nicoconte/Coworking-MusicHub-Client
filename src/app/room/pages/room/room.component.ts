import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SongQueueService } from 'src/app/song/services/song-queue.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public id!: string;

  constructor(private router: ActivatedRoute, private song: SongQueueService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params.id;
    });

    this.song.requestMyQueue(this.id)
    .then(() => {
      this.song.retrieveAndSaveQueue(this.id);
    })
  }
}
