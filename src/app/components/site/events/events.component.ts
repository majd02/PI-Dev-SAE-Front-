import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Models/Demande';
import { Event } from 'src/app/Models/Event';
import { favoris } from 'src/app/Models/favoris';
import { DemandeService } from 'src/app/Services/demande.service';
import { EventServiceService } from 'src/app/Services/event-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  public events!:any[];  
  event:any = new Event();
  
  favoriss:any = new favoris();
  demande:Demande = new Demande(); 
  constructor(private eventservice:EventServiceService, private demandeservice:DemandeService) { 

  }   
   part(id:number){
    this.demandeservice.participate(id,this.demande).subscribe();
    
  location.reload()
    }
public getEvents():void{
  this.eventservice.getEvents().subscribe(
    (response:any[])=>{
      this.events=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    );
  
  
}
 fav(id:number){
    this.eventservice.fav(id,this.favoriss).subscribe();
  
location.reload()
  }
ngOnInit(): void {
  this.getEvents();
  
}

}
