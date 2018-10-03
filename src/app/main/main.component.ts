import {Component, Input, OnInit} from '@angular/core';
import {RetrieverService} from '../retriever.service';
import {Observable} from 'rxjs';
import {MatDatepicker, MatDatepickerInput, MatOption, MatSelect} from '@angular/material';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  checkin: MatDatepickerInput<Date>;
  checkout: MatDatepickerInput<Date>;
  view: String = null;
  roomType: String = null;

  constructor(private retriever: RetrieverService) {
  }



  ngOnInit() {


  }

  getDataFromForm(){
    const checkindate: Date = this.checkin;
    const checkoutdate: Date = this.checkout;
    let checkinmilis: number = checkindate.getTime();
    let checkoutmilis: number = checkoutdate.getTime();
  }

  recordView(event){
    console.log(event.value.toString());
  }

  recordRoomType(event){
    console.log(event.value.toString());
  }

}
