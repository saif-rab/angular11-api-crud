import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url="http://localhost:3000/restaurants"
  rootUrl="http://localhost:3000/"

  constructor(private http:HttpClient) { }
  getList(){
   return this.http.get(this.url)
  }
  saveRest(data:any[]){
    // console.warn("service",data)
   return  this.http.post(this.url,data)
  }
  deleteRest(id:any[]){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentValue(id:any[]){
    return this.http.get(`${this.url}/${id}`)
  }
  updateRest(id:any[],data:any[]){
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data:any[]){
    return this.http.post(this.rootUrl +"users", data)
  }
}
