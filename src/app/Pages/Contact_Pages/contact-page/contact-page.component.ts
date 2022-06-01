import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ST-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Contact us')
   }

  ngOnInit(): void {
  }
  path:string="../../../../assets/images/Home_1.jpg"

}
