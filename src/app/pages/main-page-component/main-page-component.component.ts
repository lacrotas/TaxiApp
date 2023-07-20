import { Component} from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
  
@Component({
    selector: 'home-app',
    templateUrl: './main-page-component.component.html'
})
export class MainPageComponentComponent {

    userRole: number;

    constructor(private userSrv: UserServiceService) { }
    
    ngOnInit(): void {
        this.userRole = this.userSrv.getActiveUser().userRole;
        if(this.userRole==undefined){
            this.userRole=0;
        }
      }
 }