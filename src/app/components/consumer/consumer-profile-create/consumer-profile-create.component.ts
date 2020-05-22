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
    address:new FormControl(''),
    mobile:new FormControl('')
  })

  constructor(private router: Router) { }
  submitForm() {
    if (this.consumerProfileCreationForm) {
      var object = {};
      Object.keys(this.consumerProfileCreationForm.controls).forEach(key => {
        object[key] = this.consumerProfileCreationForm.controls[key].value;
      });
      // now above Object is ready to be sent
      console.log("consumer Form Submitted!");
      this.redirect();
    }
  }
  redirect() {
    let path = "./consumer";
    this.router.navigate([path]);
  }

  routeToProfile() {
    let path = "./consumer";
    this.router.navigate([path]);
  }

  routeToCreateProfile() {
    let path = "./createconsumer";
    this.router.navigate([path]);
  }

  ngOnInit() {
    
  }

}
