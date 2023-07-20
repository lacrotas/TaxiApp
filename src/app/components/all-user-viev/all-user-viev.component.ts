import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/Istate';
import { User } from 'src/app/models/Iuser';
import { AdminService } from 'src/app/services/admin.service';
import { Car } from 'src/app/models/Icar';
import { Driver } from 'src/app/models/Idriver';


@Component({
  selector: 'app-all-user-viev',
  templateUrl: './all-user-viev.component.html',
  styleUrls: ['./all-user-viev.component.scss']
})
export class AllUserVievComponent implements OnInit {

  users: User[];
  states: State[];
  checkKategory: number;
  newCar: Car;
  newDriver: Driver;
  
  constructor(private admin: AdminService) { }

  changecheckKategory(id:number){
    this.checkKategory = id;
  }
  deleteUser(user:any){
    let result = confirm("Вы уверены что хотите удалить пользователся");
    if(result){
      console.log(user.userid);
      this.admin.deleteUser(user.userid).subscribe();
    }
    // console.log(result);
  }

  acceptDriver(state:any){
    // login:string, password:string, email:string, phone:number
    this.admin.addDriver(state.login, state.password, state.email, Number(state.phone)).subscribe((result:Driver) => (this.newDriver=result));
    // userid:number, automark:string, color:string, number:string  
    // this.admin.addCar(Number(this.newDriver.driverid), state.automark,state.color, state.number).subscribe((result:Car) => (this.newCar=result));
  }

  deleteState(state:any){

  }

  ngOnInit(): void {
    this.admin.getAllUser().subscribe((result:User[]) => (this.users=result));
    this.admin.getAllStatemets().subscribe((result:State[]) => (this.states=result));
  }

}
