import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginser:UserServiceService,private router: Router) { 

  }

  ngOnInit(): void {
  }
  Logout(){
    this.loginser.logOut();
    this.router.navigate(['/login'])

  }

}
