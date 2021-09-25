import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  public create(roomBody: {}): Observable<any> {
    return this.http.post<any>("/api/room/new", roomBody, {
      headers: new HttpHeaders({
        "Authorization": `Token ${localStorage.getItem('token')}`
      })
    })
  }

}
