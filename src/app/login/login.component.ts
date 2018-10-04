import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {RetrieverService} from '../retriever.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;
  user: { id: number, name: string, password: string, email: string, admin: boolean};


  constructor(private retriever: RetrieverService,  public dialogRef: MatDialogRef<LoginComponent>) { }

  login() {
    this.retriever.sendLoginForm({'username': this.username, 'password': this.password}).subscribe(
      data => this.retriever.user = data, data => console.log('ERROR' + data), () => this.dialogRef.close());
  }

  ngOnInit() {
  }

}
