import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demande } from '../Models/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }

  participate(id:number,demande:Demande){
    return this.http.post<Demande>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/demande/1/"+id,demande);
    }
}
