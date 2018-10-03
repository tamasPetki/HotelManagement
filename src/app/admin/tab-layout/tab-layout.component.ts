import { Component, OnInit } from '@angular/core';
import {RetrieverService} from '../../retriever.service';
import {Room} from '../../Room';

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.css']
})
export class TabLayoutComponent implements OnInit {

  freeRoomsTODAY: Room[];

  constructor(public retriever: RetrieverService) { }

  ngOnInit() {
    return this.retriever.getRoomsForToday().subscribe(data => this.freeRoomsTODAY = data);
  }

}
