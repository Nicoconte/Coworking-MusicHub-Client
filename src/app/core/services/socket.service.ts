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
  
}
