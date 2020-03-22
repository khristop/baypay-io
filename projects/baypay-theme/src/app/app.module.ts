import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaypayModule } from 'projects/baypay/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BaypayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
