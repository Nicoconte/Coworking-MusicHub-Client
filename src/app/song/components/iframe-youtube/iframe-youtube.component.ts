import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-iframe-youtube',
  templateUrl: './iframe-youtube.component.html',
  styleUrls: ['./iframe-youtube.component.css']
})
export class IframeYoutubeComponent implements OnInit {

  public player!: YT.Player;
  public videoID!: string;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    setTimeout(() => {      
      this.storage.getItem('currentVideo').subscribe(video => {
        this.videoID = video.toString();
        this.player.loadVideoById(this.videoID);
      })
    }, 1500)
  }

  public savePlayer(player: any) {
    this.player = player;
    this.player.playVideo();
  }

  public onStateChange(event: any) {
    console.log("Player state ", event.data);
  }

}
