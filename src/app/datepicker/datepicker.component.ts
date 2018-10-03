import {Component, Input, OnInit} from '@angular/core';
import { MatDatepickerInputEvent} from '@angular/material';
import { DaterangeService} from '../daterange.service';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() id: string;
  dateTimestampStart = 'YEAR';
  dateTimestampEnd = 'END';


  addEvent(event: MatDatepickerInputEvent<Date>) {
    if(this.id === 'start') {
      this.dateTimestampStart = event.value.getTime().toString();
      this.dateRange.daterange.startDate = event.value.getTime().toString();
    }
    if(this.id === 'end') {
      this.dateTimestampEnd = event.value.getTime().toString();
      this.dateRange.daterange.endDate = event.value.getTime().toString();
    }
    console.log(event);
  }

  constructor(private dateRange: DaterangeService) {
  }

  ngOnInit() {
  }

}
