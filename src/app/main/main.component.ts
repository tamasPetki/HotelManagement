import {Component, Input, OnInit} from '@angular/core';
import {RetrieverService} from '../retriever.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isItfree: boolean;

  constructor(private retriever: RetrieverService) {
  }

  isItFreeBetween(event: boolean) {
    this.isItfree = event;
  }

  ngOnInit() {
  }

}
