import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./layouts/header/header.component";
import {NewsFeedComponent} from "./components/site/news-feed/news-feed.component";
import {EventsComponent} from "./components/site/events/events.component";
import { EventbackComponent } from './components/site/eventback/eventback.component';
import { BackComponent } from './BackLayouts/back/back.component';
import { LoginComponent } from './components/site/login/login.component';
import { EvenementComponent } from './components/site/evenement/evenement.component';

const routes: Routes = [

  { path: 'event', component: EventsComponent },
  
  { path: 'back', component: BackComponent },
  
  { path: 'eventback', component: EventbackComponent },
  
  { path: 'login', component: LoginComponent }
  ,
  
  { path: 'ff', component: EvenementComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
