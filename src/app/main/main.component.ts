import {Component, Input, OnInit} from '@angular/core';
import {RetrieverService} from '../retriever.service';
import {Observable} from 'rxjs';
import {MatDatepicker, MatDatepickerInput, MatOption, MatSelect} from '@angular/material';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  requestedDateAndType: { checkIn: Date, checkOut: Date, viewType: string, roomType: string };

  constructor(private retriever: RetrieverService) {
  }

  ngOnInit() {
  }

  formSubmit(form: NgForm) {
    this.requestedDateAndType = form.value;
    console.log(this.requestedDateAndType);
  }

}
