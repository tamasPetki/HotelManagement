import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RetrieverService} from '../../retriever.service';
import {Room} from '../../Room';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-datepickercomplex',
  templateUrl: './datepickercomplex.component.html',
  styleUrls: ['./datepickercomplex.component.css']
})
export class DatepickercomplexComponent implements OnInit {

  retrievedRooms: Observable<Room[]>;
  @Output() checkIfFreeEmitter = new EventEmitter<boolean>();
  isFreeBetweenDates = false;

  isFree: Observable<{ status: string }>;

  getIfFreeBetweenDates() {

  }

  freeBetweenDates() {
    this.retrieverservice.getIfRoomIsFree().subscribe(data => {
        console.log('subs ' + data);
        if (data.status === true) {
          this.isFreeBetweenDates = true;
        } else {
          this.isFreeBetweenDates = false;
        }
      }, data => {
        console.log('there was a error ' + data!.message);
      },
      () => this.checkIfFreeEmitter.emit(this.isFreeBetweenDates));
  }

  constructor(public retrieverservice: RetrieverService) {
  }

  ngOnInit() {
  }

}
