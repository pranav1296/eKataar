import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-profile',
  templateUrl: './consumer-profile.component.html',
  styleUrls: ['./consumer-profile.component.css']
})
export class ConsumerProfileComponent implements OnInit {
  areaCode:number;
  facilityType:string;
  storeName:string;
  slotDate:string;
  slotTime:string;

  constructor() { }

  ngOnInit() {
  }

}
