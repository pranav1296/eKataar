import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-profile-create',
  templateUrl: './consumer-profile-create.component.html',
  styleUrls: ['./consumer-profile-create.component.css']
})
export class ConsumerProfileCreateComponent implements OnInit {
  fName:string;
  lName:string;
  idType:string;
  idNumber:string;
  currentAddress:string;
  permanentAddress:string;
  mobileNumber:number;
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
