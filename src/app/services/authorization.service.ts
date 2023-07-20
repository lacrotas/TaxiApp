import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/Iuser";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class AuthorizationService{
    constructor(private http: HttpClient){
        
    }

    registration(login:string, password:string, email:string): Observable<User>{
        let registration = { login:login, password:password, email:email};
        return this.http.post<User>(`${environment.apiUrl}/api/auth/register`, registration);
    }

    login(email:string,password:string): Observable<User>{
        let authorization = {email:email, password:password};
        return this.http.post<User>(`${environment.apiUrl}/api/auth/login`, authorization);
    }
}