import { Component, OnInit } from '@angular/core';
import { appuser } from 'src/app/Models/AppUser';
import { RegistrationRequest } from 'src/app/Models/Registration';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  user:any = new appuser(); 
  constructor() { }

  ngOnInit(): void {
  }

}
