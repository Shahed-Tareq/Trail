import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ST-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pathOfImages=['../../../../assets/images/about1.jpg' , '../../../../assets/images/about2.jpg']
}
