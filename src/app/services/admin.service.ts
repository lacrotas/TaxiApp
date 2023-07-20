import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/Iuser";
import { State } from "../models/Istate";
import { Car } from "../models/Icar";
import { Driver } from "../models/Idriver";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient){
        
  }

  getAllUser(): Observable<User[]>{
      return this.http.get<User[]>(`${environment.apiUrl}/api/admin/getAllUsers`);
  }

  getAllStatemets(): Observable<State[]>{
    return this.http.get<State[]>(`${environment.apiUrl}/api/admin/getAllStatemets`);
  }

  deleteUser(id:number): Observable<User[]>{
    return this.http.delete<User[]>(`${environment.apiUrl}/api/admin/deleteUser/${id}`);
  }

  addDriver(login:string, password:string, email:string, phone:number): Observable<Driver>{
    let driver = { login:login, password:password, email:email,phone:phone};
    return this.http.post<Driver>(`${environment.apiUrl}/api/admin/addDriver`, driver);
  }   

  addCar(userid:number, automark:string, color:string, number:string): Observable<Car>{
     let car = { userid:userid, automark:automark, color:color,number:number};
     return this.http.post<Car>(`${environment.apiUrl}/api/admin/addCar`, car);
  }
}
