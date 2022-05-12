import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackComponent } from './BackLayouts/back/back.component';
import { QRCodeModule } from 'angular2-qrcode';
import { LoginComponent } from './components/site/login/login.component';
import { FormsModule } from '@angular/forms'; 
import { NgxPaginationModule } from 'ngx-pagination'; 
import { ProfilComponent } from './components/site/profil/profil.component';
import { UserbackComponent } from './components/site/userback/userback.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackComponent,
    LoginComponent,
    ProfilComponent,
    UserbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
