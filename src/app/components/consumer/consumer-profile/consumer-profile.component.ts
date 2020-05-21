import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consumer-profile',
  templateUrl: './consumer-profile.component.html',
  styleUrls: ['./consumer-profile.component.css']
})
export class ConsumerProfileComponent implements OnInit {

  slotAvailable:boolean = true;
  consumerProfileForm = new FormGroup({
    areaCode:new FormControl(''),
    facilityType:new FormControl(''),
    storeName:new FormControl(''),
    slotDate:new FormControl(''),
    slotTime:new FormControl('')
  })

  constructor(private router: Router) { }
  submitForm() {
    debugger;
    if (this.consumerProfileForm) {
      console.log("consumer Form Submitted!");
      this.redirect();
    }
  }
  redirect() {
    let path = "./";
    if(this.slotAvailable){
      path = "./" + "alotted";
    this.router.navigate([path]);
    }else{
      path = "./notalotted";
      this.router.navigate([path]);
    }
  }

  ngOnInit() {
  }

}
