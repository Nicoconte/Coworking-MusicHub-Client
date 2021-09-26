import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocketService } from 'src/app/core/services/socket.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SongQueueService {

  constructor(private socket: SocketService, private http: HttpClient, private storage: StorageService) { }

  public async send(songData: {}) {
    this.socket.emit("update-song-queue", songData);
  }

  /**
   * Get the queue from the server an update the localstorage
   * for every client in the room
   */
  public async updateQueueForAllClients(id: string) {
    this.socket.on('retrieve-queue-for-all', (queue: []) => {

      let data = {
        roomId: id,
        queue: queue
      };

      this.storage.setItem('roomInfo', data);
    });
  }

  /**
   * Request queue as Client
   * @param id RoomID
   */
  public async requestMyQueue(id: string) {
    this.socket.emit('request-queue-client', id);
  }

  /**
   * The socket will emit to you by the socket.ID the queue
   * Retrieve and save the queue in the localstorage.
   * @param id RoomID
   */
  public async retrieveAndSaveQueue(id: string) {
    this.socket.on('retrieve-queue-client', (queue: []) => {
      let data = {
        roomId: id,
        queue: queue
      };

      this.storage.setItem('roomInfo', data);
    });    
  }

  public getSongDetailesByUrl(url: string) {
    return this.http.get<any>(`http://www.youtube.com/oembed?url=${url}&format=json`)
  }

  /**
   * Parse the url and get the video ID to save it in the
   * localstorage (currentVideo(key): ID(value)).
   * @param url YoutubeVideoURL
   */
  public saveVideoIdFromUrl(url: string) {
    
    let id = url.split("?v=")[1]

    if (id.indexOf('&') > -1) {
      id = id.split("&")[0]
    }

    this.storage.setItem('currentVideo', id)
  }

}
