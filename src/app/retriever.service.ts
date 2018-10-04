///<reference path="../../node_modules/@angular/common/http/src/params.d.ts"/>
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from './Room';
import {HttpClient, HttpParams} from '@angular/common/http';
import {DaterangeService} from './daterange.service';
import {getRootView} from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})

export class RetrieverService {

  getRoomsBetweenDateRange(checkin:number, checkout:number, view:string, roomType:string): Observable<{ status: string }> {
    return this.http.get<{ status: string }>('http://localhost:8080/book',
      {
        observe: 'body', params: new HttpParams()
          .set('checkinmilis', checkin.toString())
          .set('checkoutmilis', checkout.toString())
          .set('view', view)
          .set('roomtype', roomType)
      });
  }

  getRoomsForToday(): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:3000/rooms');
  }

  getIfRoomIsFree(): Observable<{ status: boolean }> {
    return this.http.get<{ status: boolean }>('http://localhost:3000/status');
  }


  constructor(private daterangeservice: DaterangeService, private http: HttpClient) {
  }

  getReservationsBetweenDateRange(date: string): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:3000/book',
      {
        observe: 'body', params: new HttpParams()
          .set('checkinmilis', date)
      });
  }

  sendLoginForm (userdata: {username: string, password: string}): Observable<{ id: number, name: string, password: string, email: string, admin: boolean}> {
    return this.http.post<{ id: number, name: string, password: string, email: string, admin: boolean}>('http://localhost:8080/login', userdata);
  }
}

/*  consolePrinter(): void {
    console.log('WORKS');
    // this.getRooms().toPromise().then(room => this.rooms = room as Room[]);
    this.getRooms().subscribe(room => this.rooms = room as Room[]);
    console.log(this.rooms);
  }
  */
