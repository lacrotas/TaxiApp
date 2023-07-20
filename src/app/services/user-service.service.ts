import { Injectable } from '@angular/core';
import { Order } from "../models/Iorder";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';
import { User } from '../models/Iuser';
import {State} from '../models/Istate';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient){
        
  }

  addTrip(userid:number, startPoint:string, endPoint:string): Observable<Order>{
    let order = { userid:userid, startPoint:startPoint, endPoint:endPoint};
    return this.http.post<Order>(`${environment.apiUrl}/api/user/addTrip`, order);
  }

  addStatement(userid:number, login:string, automark:string,color:string, number:string,phone:number, email:string): Observable<State>{
    let state = { userid:userid, login:login, automark:automark,color:color,number:number,phone:phone,email:email};
    return this.http.post<State>(`${environment.apiUrl}/api/user/addStatement`, state);
  }

  setActiveUser(user:User){
    localStorage.setItem("activeUser", JSON.stringify({userId:user.userId, userRole:user.userRole, login:user.login, email:user.email, phone:user.phone}));
  }
  
  getActiveUser(){
    const activeUser = localStorage.getItem("activeUser");
    if(activeUser !== null){
      const activeUserObject = JSON.parse(activeUser);
      return activeUserObject;
    }else return 0;
  }

  logOut(){
    localStorage.removeItem("activeUser");
  }
}
