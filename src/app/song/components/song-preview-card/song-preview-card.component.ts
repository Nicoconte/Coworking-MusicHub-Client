import { Component, Input, OnInit } from '@angular/core';
import { SongQueueService } from '../../services/song-queue.service';

@Component({
  selector: 'app-song-preview-card',
  templateUrl: './song-preview-card.component.html',
  styleUrls: ['./song-preview-card.component.css']
})
export class SongPreviewCardComponent implements OnInit {

  @Input() url!: string;

  public title!: string;
  public thumbnailUrl!: string;

  constructor(private song: SongQueueService) { }


  ngOnInit(): void {
    this.song.getSongDetailesByUrl(this.url).subscribe(res => {
      if (res) {
        this.title = res.title;
        this.thumbnailUrl = res.thumbnail_url
      }
    })
  }
  
  public playSong() {
    this.song.saveVideoIdFromUrl(this.url);
  }

}
