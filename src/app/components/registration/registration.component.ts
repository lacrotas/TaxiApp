import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Iuser';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit{
 
  activeUser: User;

  constructor(private router: Router, private auth: AuthorizationService, private userSrv: UserServiceService) { };

  registrate(login:string, password: string, repassword: string, email: string){
    if(password==repassword){
      this.auth.registration(login, password, email).subscribe((result:User) => (this.activeUser=result));
      if(this.activeUser != undefined){
        this.router.navigate(['/']);
        this.userSrv.setActiveUser(this.activeUser);
      }else{
        alert("Пользователь с такой почтой уже есть");
      }
    }else{
      alert("Пароли не совпадают");
    }
  }
  
  ngOnInit(): void {
    
  }
}
