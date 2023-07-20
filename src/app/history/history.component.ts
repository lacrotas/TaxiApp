import { Component, OnInit } from '@angular/core';
import { NewServiseService } from '../new-servise.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  activeUser:any;
  historyList:any;

  constructor() { }

  srv: NewServiseService = new NewServiseService;

  ngOnInit(): void {
  }
  ngDoCheck():void{
    this.activeUser = this.srv.checkUser();
    this.historyList = this.srv.ways;
  }

}
