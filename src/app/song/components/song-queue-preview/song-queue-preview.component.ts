import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-song-queue-preview',
  templateUrl: './song-queue-preview.component.html',
  styleUrls: ['./song-queue-preview.component.css']
})
export class SongQueuePreviewComponent implements OnInit {

  public urls: [] = [];

  public roomInfo!: any;

  constructor(private storage: StorageService) {     
  }

  ngOnInit(): void {

    this.storage.getItem('roomInfo').subscribe(v => {
      this.roomInfo = Object(v);
      this.urls = this.roomInfo.queue;
    })
    
  }

}
