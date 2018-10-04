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
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TabLayoutComponent } from './admin/tab-layout/tab-layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RoomsForSpecifiedDateComponent } from './admin/tab-layout/rooms-for-specified-date/rooms-for-specified-date.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    DatepickercomplexComponent,
    ListComponent,
    MainComponent,
    TabLayoutComponent,
    RoomsForSpecifiedDateComponent,
    LoginComponent
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
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
