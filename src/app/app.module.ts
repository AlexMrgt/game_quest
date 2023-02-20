import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingWebModule } from './app-routing.web.module';




@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingWebModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
