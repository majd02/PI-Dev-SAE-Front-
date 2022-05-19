import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  title ='pagination';
  page: number=1;
count: number=0;
tableSize: number = 5; 
tableSizes: any = [5, 10, 15, 20]; 

  constructor(private eventservice:EventServiceService,private router: Router
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
onTableDataChange (event: any){
  this.page=event;
  this.getEvents();
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
    updateevent(id: number){
      this.router.navigate(['/update', id]);
    }
}
