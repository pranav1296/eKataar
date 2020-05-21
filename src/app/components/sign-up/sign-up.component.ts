import { Component, OnInit } from '@angular/core';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase'
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  typeOfUser:string;
  // below variable will be populate from Googlesignup app 
  isUserRegisterd:boolean = false;

  constructor(private router: Router) { }
  redirect(typeOfUser:string) {
    let path = "./";
    if(this.isUserRegisterd){
      path = "./" + typeOfUser;
    this.router.navigate([path]);
    }else{
      path = "./create" + typeOfUser;
      this.router.navigate([path]);
    }
    
  }

  ngOnInit() {
    console.log(firebase);
  }

}
