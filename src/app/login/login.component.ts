import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RetrieverService} from '../retriever.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  user: { id: number, name: string, password: string, email: string, admin: boolean};
  @Output() sendUser = new EventEmitter<{ id: number, name: string, password: string, email: string, admin: boolean}>();

  constructor(private retriever: RetrieverService) { }

  login() {
    this.retriever.sendLoginForm({'username': this.username, 'password': this.password}).subscribe(
      data => this.user = data, data => console.log('ERROR' + data), () => this.sendUser.emit(this.user));
  }

  ngOnInit() {
  }

}
