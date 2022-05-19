import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Models/Demande';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  public demandes!:any[];  
  demande:any = new Demande(); 
  constructor(private demandeservice:DemandeService  ) { }
  public getdemande():void{
    this.demandeservice.getDemande().subscribe(
      (response:any[])=>{
        this.demandes=response;
        console.log(response);
      },
        (error:HttpErrorResponse)=>
        {
          alert(error.message);
        }
      ); 
  }
  acc(id:number){
    this.demandeservice.acc(id,this.demande).subscribe(
    ); 
    location.reload()
  }
  ref(id:number){
    this.demandeservice.ref(id,this.demande).subscribe(
    ); 
    location.reload()
  }
  ngOnInit(): void {
    this.getdemande();
  }

}
