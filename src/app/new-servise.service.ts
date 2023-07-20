import { Injectable } from '@angular/core';
import {User} from './Iuser';
import { Ways } from './Iways';

@Injectable({
  providedIn: 'root'
})
export class NewServiseService {

  user: User[] = [
    {id:1,login:"maks",password:"12345",email:"123123mask@mail.ru",phoneNumber:"+375 33 35 231 55", payState:"visa",bagage:"нет",traffic:"комфорт"},
    {id:2,login:"admin",password:"12345",email:"haha@mail.ru",phoneNumber:"+375 33 45 131 65", payState:"master card",bagage:"нет",traffic:"люкс"},
  ];
  ways:Ways[] = [
    {id:1,start:"tereshkova",end:"mashero",driver:"BoBa",price:"12.2"}
  ];

  constructor() { }
//for authoriztion and registration
  addUser(user:User):boolean{
    if(this.getAllUsers()!=0){
    this.user = this.getAllUsers();
    }
    this.user.push({id:this.user.length+1,login:user.login, password:user.password, email:"",phoneNumber:"",payState:"",bagage:"",traffic:""});
    localStorage.setItem("users", JSON.stringify(this.user));
    this.setActiveUser(this.user[this.user.length-1]);
    return false;
  }

  updateUser(){
    if(this.getAllUsers()!=0){
      this.user = this.getAllUsers();
    }
  }

  getAllUsers(){
    const users = localStorage.getItem("users");
    if(users !== null){
      const usersArray = JSON.parse(users);
      return usersArray;
    }else return 0;
  }

  findUser(password:string,login:string){
    if(this.getAllUsers()!=0){
      this.user = this.getAllUsers();
    }
    for(let i = 0 ;i < this.user.length-1;i++){
      if(this.user[i].login==login && this.user[i].password==password){
        return this.user[i];
      }
    }
    return  {id:1,login:"maks",password:"12345",email:"123123mask@mail.ru",phoneNumber:"+375 33 35 231 55", payState:"visa",bagage:"нет",traffic:"комфорт"};
  }
  redactUserMain(oldPassword:string, oldLogin:string,password:string,login:string,email:string,phoneNumber:string){
    this.updateUser();
    for(let i = 0 ;i < this.user.length-1;i++){
      if(this.user[i].login==oldLogin && this.user[i].password== oldPassword){
        this.user[i].login = login;
        this.user[i].password = password;
        this.user[i].email = email;
        this.user[i].phoneNumber = phoneNumber;
        localStorage.setItem("users", JSON.stringify(this.user));
        localStorage.setItem("activeUser",JSON.stringify(this.user[i]));
        console.log("work");
      }
    }
  }
//for header
  setActiveUser(user:User){
    localStorage.setItem("activeUser", JSON.stringify({id:user.id,login:user.login,password:user.password, email:user.email, phoneNumber:user.phoneNumber, payState:user.payState, bagage:user.bagage,traffic:user.traffic}));
  }
  checkUser(){
    const activeUser = localStorage.getItem("activeUser");
    if(activeUser !== null){
      const activeUserObject = JSON.parse(activeUser);
      return activeUserObject;
    }else return 0;
  }
  logOut(){
    localStorage.removeItem("activeUser");
  }
}
