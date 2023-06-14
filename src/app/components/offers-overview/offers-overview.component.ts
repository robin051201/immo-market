import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-overview',
  templateUrl: './offers-overview.component.html',
  styleUrls: ['./offers-overview.component.scss']
})
export class OffersOverviewComponent implements OnInit {

  constructor() { }
  property: any = {
    title: "3ZKB Helle Wohnung in Trier",
    price: 459000,
    bedrooms: 2,
    bathrooms: 1,
    image: "https://www.engelvoelkers.com/images/2738b482-b0d6-4e1f-b4de-0500a5f9e8df/sonnige-maisonette-wohnung-mit-tiefgaragenstellplatz-3-obergeschoss",
    address: "Trier-Zewen",
    description: "Helle Wohnung. Optimal für Pendler"
  }
  properties: any = [];

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    this.properties.push(this.property);
    this.properties.push(this.property);
    this.properties.push(this.property);
    this.properties.push(this.property);
    this.properties.push(this.property);
    this.properties.push(this.property);
  }
}
