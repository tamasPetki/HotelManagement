import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';
import {RetrieverService} from '../../../retriever.service';
import {Room} from '../../../Room';

@Component({
  selector: 'app-rooms-for-specified-date',
  templateUrl: './rooms-for-specified-date.component.html',
  styleUrls: ['./rooms-for-specified-date.component.css']
})
export class RoomsForSpecifiedDateComponent implements OnInit {

  @Output() selectedDate = new EventEmitter<string>();
  rooms: Room[];

  constructor(private retriever: RetrieverService) { }

  emitChosenDate(date: MatDatepickerInputEvent<Date>) {
    // this.selectedDate.emit(date.value.getTime().toString());
  this.retriever.getReservationsBetweenDateRange(date.value.getTime().toString()).subscribe(data => this.rooms = data);
  }

  ngOnInit() {
  }

}
