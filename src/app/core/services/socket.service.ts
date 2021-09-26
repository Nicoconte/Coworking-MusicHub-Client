import { Injectable } from '@angular/core';

import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: any = io('http://localhost:3000', {
    reconnection: true
  })

  constructor() { }

  public emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

  public on(event: string, callback: any) {
    this.socket.on(event, callback)
  }


    // public join(roomId: string) {
  //   this.socket.emit('access-room', roomId);
  // }

  // public requestQueue(roomId: string) {
  //   this.socket.emit('request-queue', roomId);
  // }

  // public getQueue(roomId: string) {
  //   setTimeout(() => {
  //     this.socket.on('get-updated-queue', (queue: []) => {

  //       let info = {
  //         roomId: roomId,
  //         songs: queue
  //       }

  //       localStorage.setItem('roomInfo', JSON.stringify(info));
  //     })

  //   }, 0)
  // }

  // public sendData(data: {}) {
  //   this.socket.emit('song-queue-update', data)
  // }

  
}
