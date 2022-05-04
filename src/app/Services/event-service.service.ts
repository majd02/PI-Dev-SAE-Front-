import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appuser } from '../Models/AppUser';
import { environment } from 'src/environments/environment';
import { favoris } from '../Models/favoris';
@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { 
  }
  public getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.apiServerUrl);
  }
  public deleteEventById(id:number){
    return this.http.delete("http://localhost:8089/SpringMVCMajd/api/v1/registartion/event/"+id);

    }
    addEvent(event:Event){
      return this.http.post<Event>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/event/add",event);
      }
      modif(event:Event){
        return this.http.put<Event>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/event/",event);
        }
      fav(id:number,favoriss:favoris){
        return this.http.post<favoris>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/fav/not/1/"+id,favoriss);
        }
}
