import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DatepickercomplexComponent} from './datepicker/datepickercomplex/datepickercomplex.component';
import { MainComponent} from './main/main.component';
import { AdminComponent} from './admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent},
  { path: '', component: MainComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
