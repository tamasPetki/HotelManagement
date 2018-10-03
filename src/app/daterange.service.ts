import { Injectable } from '@angular/core';
import { DateRange } from './DateRange';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Room} from './Room';


@Injectable({
  providedIn: 'root'
})

export class DaterangeService {

  // TODO access modifier
  public daterange: DateRange;
  public rooms: Room[];

  constructor() {
    this.daterange = new DateRange();
  }

}
