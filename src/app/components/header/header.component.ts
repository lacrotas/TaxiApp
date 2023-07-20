import { Component, OnInit } from '@angular/core';
import { NewServiseService } from 'src/app/new-servise.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  srv: NewServiseService = new NewServiseService;
  activeUser;
  constructor() { 
    this.activeUser = this.srv.checkUser();
  }

  logOut(){
    this.srv.logOut();
    console.log('work');
    this.activeUser = this.srv.checkUser();
  }

  ngOnInit(): void {
    this.activeUser = this.srv.checkUser();
  }
  
  ngDoCheck():void{
    this.activeUser = this.srv.checkUser();
  }

}
