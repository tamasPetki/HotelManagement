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
import { DatepickercomplexComponent } from './datepickercomplex/datepickercomplex.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    DatepickercomplexComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
