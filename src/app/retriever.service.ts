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

  getRoomsBetweenDateRange(): Observable<{ status: string }> {
    return this.http.get<{ status: string }>('http://localhost:8080/book',
      {
        observe: 'body', params: new HttpParams()
          .set('checkinmilis', this.daterangeservice.daterange.startDate)
          .set('checkoutmilis', this.daterangeservice.daterange.endDate)
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
}

/*  consolePrinter(): void {
    console.log('WORKS');
    // this.getRooms().toPromise().then(room => this.rooms = room as Room[]);
    this.getRooms().subscribe(room => this.rooms = room as Room[]);
    console.log(this.rooms);
  }
  */
