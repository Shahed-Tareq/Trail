import { KeyValue } from '@angular/common';
import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'ST-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Header={
    'Home':'',
    'About': 'about',
    'Services': 'Services',
    'Contact':'contact'
  }
  onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 1;
  }
  variable=false;
@HostListener("document:scroll")
scrollfunction(){
  if(document.body.scrollTop> 0 || document.documentElement.scrollTop>0){
    this.variable=true;
  }
  else{
    this.variable=false;
  }
}
  

}
