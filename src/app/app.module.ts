import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NewsFeedComponent } from './components/site/news-feed/news-feed.component';
import { EventsComponent } from './components/site/events/events.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackComponent } from './BackLayouts/back/back.component';
import { QRCodeModule } from 'angular2-qrcode';
import { LoginComponent } from './components/site/login/login.component';
import { FormsModule } from '@angular/forms';
import { EvenementComponent } from './components/site/evenement/evenement.component';
import { EventbackComponent } from './components/site/eventback/eventback.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsFeedComponent,
    EventsComponent,
    BackComponent,
    LoginComponent,
    EvenementComponent,
    EventbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
