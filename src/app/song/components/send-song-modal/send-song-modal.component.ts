import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SongQueueService } from '../../services/song-queue.service';

@Component({
  selector: 'app-send-song-modal',
  templateUrl: './send-song-modal.component.html',
  styleUrls: ['./send-song-modal.component.css']
})
export class SendSongModalComponent implements OnInit {

  private id!: string;

  public songForm: FormGroup = new FormGroup({
    "url": new FormControl("", [])
  })

  constructor(private song: SongQueueService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
    })
  } 

  public sendSongToServer() {
    this.song.send({
      "roomId": this.id,
      "songUrl": this.songForm.get('url')?.value
    })
    .then(() => {
      this.song.updateQueueForAllClients(this.id);
    })

    this.songForm.reset();
  }

}
