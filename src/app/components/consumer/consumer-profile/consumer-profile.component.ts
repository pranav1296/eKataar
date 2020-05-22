import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consumer-profile',
  templateUrl: './consumer-profile.component.html',
  styleUrls: ['./consumer-profile.component.css']
})
export class ConsumerProfileComponent implements OnInit {

  slotAvailable: boolean = true;
  consumerProfileForm = new FormGroup({
    areaCode: new FormControl(''),
    facilityType: new FormControl(''),
    storeName: new FormControl(''),
    slotDate: new FormControl(''),
    slotTime: new FormControl('')
  })

  constructor(private router: Router) { }
  submitForm() {
    if (this.consumerProfileForm) {
      var object = {};
      Object.keys(this.consumerProfileForm.controls).forEach(key => {
        object[key] = this.consumerProfileForm.controls[key].value;
      });
      // now above Object is ready to be sent
      console.log("consumer Form Submitted!");
      this.redirect();
    }
  }
  redirect() {
    let path = null;
    if (this.slotAvailable) {
      path = "./" + "alotted";
      this.router.navigate([path]);
    } else {
      path = "./notalotted";
      this.router.navigate([path]);
    }
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
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {  
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("slotDate").setAttribute("min", today);
  }

}
