import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ST-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Our Services')
   }
  ngOnInit(): void {
  }
  pathOfImages=['../../../../assets/images/ser1.jpg' , '../../../../assets/images/ser2.jpg'];

}
