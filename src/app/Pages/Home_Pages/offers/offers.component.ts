import { Component, OnInit } from '@angular/core';
import { offer } from '../shared/offer';

@Component({
  selector: 'ST-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  offers:offer[]=[
    {title:'Mini pizzas' , description:'Delectable and bite-sized, mini pizzas are a favorite of all age groups.'},
    {title:'Smoked Trout Empanadas' , description:'Every empanada is filled, made, and cooked by hand.'},
    {title:'Homemade French Fries' , description:'Surprise your guests with the best gourmet french fries they’ve ever tasted.'},
    {title:'Mini Lamb Burger' , description:'Although the flavors are slightly unusual, guests always go for seconds.'},
    {title:'Stuffed Mushrooms' , description:'A kitchen classic, this is the perfect choice if you’ve vegans in your party.'},
    {title:'Duck Confit Quesadillas' , description:'Sophistication and flavor come together in this perfectly cheesy quesadilla. '},

  ]

}
