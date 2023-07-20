import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Iorder';
import { User } from 'src/app/models/Iuser';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  selectedType: number;
  activeUser: User;
  activeOrder: Order;
  

  constructor(private userSrv: UserServiceService,private router: Router) { }

  addTrip(start:string, end:string){
     if(this.userSrv.getActiveUser()){
      this.activeUser = this.userSrv.getActiveUser();
      if(start==""|| end==""){
        alert("Укажите маршрут");
      }else{
        this.userSrv.addTrip(Number(this.activeUser.userId), start, end).subscribe((result:Order) => (this.activeOrder=result));
      }
     }else{
      this.router.navigate(['/authorizatoin']); 
     }
  }

  changeSelectedType(id:number){
    this.selectedType = id;
    console.log(this.selectedType);
  }
  ngOnInit(): void {
  
  }

}
