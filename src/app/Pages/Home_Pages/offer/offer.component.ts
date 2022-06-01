import { Component, Input, OnInit } from '@angular/core';
import { offer } from '../shared/offer';

@Component({
  selector: '[ST-offer]',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()offer:offer = {} as offer;

}
