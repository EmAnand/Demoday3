import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetServicesService {

  constructor(private http:HttpClient) { }

getweather(){
  return this.http.get('https://reqres.in/api/users?page=2');
}
}
