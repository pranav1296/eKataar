import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-consumer-profile-create',
  templateUrl: './consumer-profile-create.component.html',
  styleUrls: ['./consumer-profile-create.component.css']
})
export class ConsumerProfileCreateComponent implements OnInit {

  consumerProfileCreationForm = new FormGroup({
    fName:new FormControl(''),
    lName:new FormControl(''),
    idType:new FormControl(''),
    idNumber:new FormControl(''),
    currentAddress:new FormControl(''),
    permanentAddress:new FormControl(''),
    mobileNumber:new FormControl('')
  })

  constructor(private router: Router) { }
  submitForm() {
    debugger;
    if (this.consumerProfileCreationForm) {
      console.log("consumer Form Submitted!");
      this.redirect();
    }
  }
  redirect() {
    let path = "./consumer";
    this.router.navigate([path]);
  }

  ngOnInit() {
    
  }

}
