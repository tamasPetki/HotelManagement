import {Component, Input, OnInit} from '@angular/core';
import {RetrieverService} from '../retriever.service';
import {Observable} from 'rxjs';
import {MatDatepicker, MatDatepickerInput, MatOption, MatSelect} from '@angular/material';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  checkin: number = new Date().getTime();
  checkout: number = new Date(new Date().getTime() + (60 * 60 * 24 * 1000)).getTime();
  view: String = null;
  roomType: String = null;
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date(new Date().getTime() + (60 * 60 * 24 * 1000)));


  constructor(private retriever: RetrieverService) {
  }


  ngOnInit() {

  }

  recordCheckinDate(event) {
    let date: Date = event.value;
    this.checkin = date.getTime();
  }

  recordCheckoutDate(event) {
    let date: Date = event.value;
    this.checkout = date.getTime();
  }



  recordView(event) {
    this.roomType = event.value.toString();
  }

  recordRoomType(event) {
    this.view = event.value.toString();
  }

  collectData(){
      console.log(this.checkin);
      console.log(this.checkout);
      console.log(this.view);
      console.log(this.roomType);
  }

}
