import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import { MatNativeDateModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DatepickercomplexComponent } from './datepicker/datepickercomplex/datepickercomplex.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './table/list.component';
import {MatTableModule} from '@angular/material/table';
import { ListroomsfortodayComponent } from './table/rooms_for_today-in_table/listroomsfortoday.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import {MatMenuModule} from '@angular/material/menu';
import { AdminComponent } from './admin/admin.component';
import { TabLayoutComponent } from './admin/tab-layout/tab-layout.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    DatepickercomplexComponent,
    ListComponent,
    ListroomsfortodayComponent,
    MainComponent,
    AdminComponent,
    TabLayoutComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    NgbModule,
    MatTableModule,
    AppRoutingModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
