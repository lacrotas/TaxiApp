import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Iuser';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-authorization-component',
  templateUrl: './authorization-component.component.html',
  styleUrls: ['./authorization-component.component.scss']
})
export class AuthorizationComponentComponent implements OnInit{
 
  activeUser: User;

  constructor(private auth: AuthorizationService, private router: Router, private userSrv: UserServiceService,) {};
  
  logUser(email:string,password:string){
    this.auth.login(email, password).subscribe((result:User) => (this.activeUser=result));
    if(this.activeUser != undefined){
      this.router.navigate(['/']); 
      this.userSrv.setActiveUser(this.activeUser);
    }else{
      alert("Неверный логин или пароль");
    }
  }
  ngOnInit(): void{
    
  }

}
