import {Component, Input, OnInit} from '@angular/core';
import {RetrieverService} from '../retriever.service';
import {FormControl} from '@angular/forms';
import {LogincheckService} from '../logincheck.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  checkin: number = new Date().getTime();
  checkout: number = new Date(new Date().getTime() + (60 * 60 * 24 * 1000)).getTime();
  view: string = null;
  roomType: string = null;
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date(new Date().getTime() + (60 * 60 * 24 * 1000)));
  message: string = null;
  loggedin: boolean;


  constructor(private retriever: RetrieverService, private loggedinservice: LogincheckService) {
  }


  ngOnInit() {
    this.loggedinservice.checkIfLoggedIn().subscribe(data => {
      const loggedin = data.loggedin;
      if (loggedin === 'success') {
        this.loggedin = true;
      } else {
        this.loggedin = false;
      }
    });
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

  collectData() {
    console.log(this.checkin);
    console.log(this.checkout);
    console.log(this.view);
    console.log(this.roomType);
    this.loggedinservice.checkIfLoggedIn().subscribe(data => {
      const loggedin = data.loggedin;

      if (loggedin === 'success') {
        this.retriever.getRoomsBetweenDateRange(this.checkin, this.checkout, this.view, this.roomType)
          .subscribe(resp => this.message = resp.status);
      } else {
        console.log('not logged in');
      }

    });

  }

}
