import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './BackLayouts/back/back.component';
import { EventbackComponent } from './components/site/eventback/eventback.component';
import { EventsComponent } from './components/site/events/events.component';
import { LoginComponent } from './components/site/login/login.component';
import { ProfilComponent } from './components/site/profil/profil.component';
import { UserbackComponent } from './components/site/userback/userback.component';
import {HeaderComponent} from "./layouts/header/header.component";


const routes: Routes = [

  
  { path: 'back', component: BackComponent },

  { path: 'login', component: LoginComponent }
  ,
 
  { path: 'profil', component: ProfilComponent }
  ,

  
  { path: 'backuser', component: UserbackComponent }
  ,
  
  { path: 'event', component: EventsComponent }
  ,
  
  { path: 'eventback', component: EventbackComponent }

  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
