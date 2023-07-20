import { Component, OnInit } from '@angular/core';
import { NewServiseService } from 'src/app/new-servise.service';

@Component({
  selector: 'app-personal-office',
  templateUrl: './personal-office.component.html',
  styleUrls: ['./personal-office.component.scss']
})
export class PersonalOfficeComponent implements OnInit {

  srv: NewServiseService = new NewServiseService;
  activeUser:any;

  constructor() { }
  
  redactMain(password:string,login:string,email:string,phone:string){
    this.srv.redactUserMain(this.activeUser.password,this.activeUser.login,password,login,email,phone);
    return false;
  }
  ngOnInit(): void {
  }

  ngDoCheck():void{
    this.activeUser = this.srv.checkUser();
  }

}
