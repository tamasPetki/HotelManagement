import {Component, Input, OnInit} from '@angular/core';
import {RetrieverService} from '../retriever.service';
import {Room} from '../Room';
import { FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  rooms: Room[];
  @Input() isLoadingResults = false;

  displayedColumns: string[] = ['Number', 'CheckIn', 'CheckOut', 'User'];
  @Input() dataSource: Room[];

  constructor() { }

  ngOnInit() {
  }

}
