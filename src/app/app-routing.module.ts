import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './main/main.component';
import { TabLayoutComponent} from './admin/tab-layout/tab-layout.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'admin', component: TabLayoutComponent},
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
