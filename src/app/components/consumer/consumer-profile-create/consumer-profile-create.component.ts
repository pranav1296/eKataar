import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-consumer-profile-create',
  templateUrl: './consumer-profile-create.component.html',
  styleUrls: ['./consumer-profile-create.component.css']
})
export class ConsumerProfileCreateComponent implements OnInit {

  profileForm = new FormGroup({ 
    fName:new FormControl(''),
    lName:new FormControl(''),
    idType:new FormControl(''),
    idNumber:new FormControl(''),
    currentAddress:new FormControl(''),
    permanentAddress:new FormControl(''),
    mobileNumber:new FormControl('')
  })

  
  
  consumerProfileForm:{};
  constructor() { }
  onSubmit() {
    debugger;
    if (this.consumerProfileForm) {
      console.log("Form Submitted!");
    }
  }

  ngOnInit() {
    
  }

}
