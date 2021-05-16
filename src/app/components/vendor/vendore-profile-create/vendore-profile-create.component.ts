import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-vendore-profile-create',
  templateUrl: './vendore-profile-create.component.html',
  styleUrls: ['./vendore-profile-create.component.css']
})
export class VendoreProfileCreateComponent implements OnInit {
  showSuccess = false;
  constructor(private router: Router) { }
   
  submitVendor() {
     
    this.showSuccess = true;
    }
  

  ngOnInit() {
  }
  createVendorProfile() {
    this.showSuccess = true;
  }

}
