import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/Event';
import { EventServiceService } from 'src/app/Services/event-service.service';

@Component({
  selector: 'app-eventback',
  templateUrl: './eventback.component.html',
  styleUrls: ['./eventback.component.css']
})
export class EventbackComponent implements OnInit {

  public events!:any[];  
  event:any = new Event(); 
  
  constructor(private eventservice:EventServiceService,
   ) { 

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
deleteEvent(id:number){
  this.eventservice.deleteEventById(id).subscribe(
  ); 
  location.reload()
}
  ngOnInit(): void {
    this.getEvents();
    
  }
  public onUpdateEmloyee(): void {
    this.eventservice.modif(this.event).subscribe(
      
    );
  }
  addEvent(){
    this.eventservice.addEvent(this.event).subscribe();
    
  location.reload()
    }
 
    public onOpenModal(event: Event, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal'); 
      if (mode === 'add') {
        button.setAttribute('data-target', '#addEmployeeModal');
      }
      if (mode === 'edit') {
        button.setAttribute('data-target', '#updateEmployeeModal');
      }
      if (mode === 'delete') {
        button.setAttribute('data-target', '#deleteEmployeeModal');
      }
     
      button.click();
    }
}
