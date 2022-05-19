import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/Models/Event';
import { EventServiceService } from 'src/app/Services/event-service.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  id!: number;
  event:any = new Event(); 
  constructor(private eventservice:EventServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
     
    this.event = new Event();

    this.id = this.route.snapshot.params['id'];
    
    this.eventservice.getEvent(this.id)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateevent();    
  }
  updateevent() {
    this.eventservice.updateEvent(this.id, this.event)
      .subscribe(data => {
        console.log(data);
        this.event = new Event();
        this.gotoList();
      }, error => console.log(error));
      this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/eventback']);
  }
}
