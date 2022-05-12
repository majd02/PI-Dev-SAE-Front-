import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { appuser } from 'src/app/Models/AppUser';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public profilfa:any = new appuser(); 
  
  public eventfa!:any[];   
  constructor(private usersercie:UserServiceService) { }

public getuser():void{
  this.usersercie.profil().subscribe(
    (response:any[])=>{
      this.profilfa=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    );
    


}

  ngOnInit(): void {
    this.getuser();
  }


}
