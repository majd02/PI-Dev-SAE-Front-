import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { RegistrationRequest } from 'src/app/Models/Registration';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = new RegistrationRequest(); 
  
  user1:any = new LoginRequest(); 
  constructor(private serviceuser :UserServiceService) { }

  ngOnInit(): void {
  }
  adduser(){
    this.serviceuser.adduser(this.user).subscribe(
   
    );
    
  location.reload()
    }
    login(){
      return this.serviceuser.Login(this.user1).subscribe();
      
      }
    }
      

