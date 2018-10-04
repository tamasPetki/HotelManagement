import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MatDialog} from '@angular/material';
import {RetrieverService} from './retriever.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelManagement';
  loggedIn = false;


  openDialog() {
    this.modal.open(LoginComponent);
  }

  constructor(public modal: MatDialog, public retriever: RetrieverService){
  };

  }
