import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationRequest } from '../Models/Registration';
import { LoginRequest } from '../Models/LoginRequest';

import { JwtHelperService } from '@auth0/angular-jwt';
import { JWTresponse } from '../Models/JWTResponse';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient) { }

  Login(loginRequest:LoginRequest){
    return this.http.post<LoginRequest>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/login",loginRequest);
    }
    adduser(user:RegistrationRequest){
      return this.http.post<RegistrationRequest>("http://localhost:8089/SpringMVCMajd/api/v1/registartion",user);
      }
      
}
