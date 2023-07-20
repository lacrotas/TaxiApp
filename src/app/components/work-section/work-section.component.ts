import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from 'src/app/models/Istate';
import { User } from 'src/app/models/Iuser';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent implements OnInit {
  activeUser: User;
  activeState: State;

  constructor(private userSrv: UserServiceService,private router: Router) { }
  addState(login:string, automark:string,color:string, number:string,phone:string){
    if(this.userSrv.getActiveUser()){
      this.activeUser = this.userSrv.getActiveUser();
      if(login==""|| automark==""|| color==""|| number==""|| phone==""){
        alert("Введите все данные");
      }else{
        this.userSrv.addStatement(Number(this.activeUser.userId), login, automark, color,number,Number(phone), this.activeUser.email).subscribe((result:State) => (this.activeState=result));
      }
     }else{
      this.router.navigate(['/authorizatoin']); 
     }
  }

  ngOnInit(): void {
  }

}
