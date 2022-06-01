import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ST-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Index')
   }

  ngOnInit(): void {
  }
  pathImage1:string="../../../../assets/images/Home_1.jpg"
  pathImage2:string="../../../../assets/images/home.jpg"

}
