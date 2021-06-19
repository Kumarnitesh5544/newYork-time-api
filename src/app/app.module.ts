import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopbarComponent } from './topbar/topbar.component';
import {HttpClientModule}  from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ArtsComponent } from './arts/arts.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';
import { GetbyComponent } from './getby/getby.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TopbarComponent,
    AboutComponent,
    ArtsComponent,
    MainpageComponent,
    GetbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
