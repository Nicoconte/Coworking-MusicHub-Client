import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private headerOptions = new HttpHeaders({
    "Authorization": `Token ${localStorage.getItem('token')}`
  })

  constructor(private http: HttpClient) { }

  public create(roomBody: {}): Observable<any> {
    return this.http.post<any>("/api/room/new", roomBody, {
      headers: this.headerOptions
    })
  }

  public list(): Observable<any> {
    return this.http.get<any>("/api/room/public/all", {
      headers: this.headerOptions
    })
  }

  public join(roomId: string, credentials: {} = {}): Observable<any> {
    return this.http.post<any>(`/api/room/${roomId}/join`, credentials, { headers: this.headerOptions }) 
  }

  public getAccess(roomId: string): Observable<any> {
    return this.http.post<any>(`/api/room/${roomId}/access`, {}, { headers: this.headerOptions })
  }

}
