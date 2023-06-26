import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../../Services/apiservice.service";
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-overview',
  templateUrl: './offers-overview.component.html',
  styleUrls: ['./offers-overview.component.scss']
})
export class OffersOverviewComponent implements OnInit {

  constructor(
    private offer: ApiserviceService,
    private route: ActivatedRoute, // neu hinzugefügt
  ) {
    this.offer.getData().subscribe((offers) => {
      this.propertiesNew = offers;
      console.log(this.propertiesNew);
    });
  } 

  ngOnInit(): void {
    this.loadProperties();

    this.route.queryParams.pipe(
      switchMap((params) => this.offer.getDataBySearchterm(params.search)
      )
    ).subscribe((offers) => {
      this.propertiesNew = offers;
      console.log(this.propertiesNew);
    });
  }

  pproperty: any = {
    title: "3ZKB Helle Wohnung in Trier",
    price: 459000,
    bedrooms: 2,
    bathrooms: 1,
    image: "https://www.engelvoelkers.com/images/2738b482-b0d6-4e1f-b4de-0500a5f9e8df/sonnige-maisonette-wohnung-mit-tiefgaragenstellplatz-3-obergeschoss",
    address: "Trier-Zewen",
    description: "Helle Wohnung. Optimal für Pendler"
  }
  properties: any = [];
  propertiesNew: Array<Property> = [];
   
  loadProperties() {
  }
}

export class Property {

  bathrooms: number | undefined;
  bedrooms: number | undefined;
  city: string | undefined;
  country: string | undefined;
  description: string | undefined;
  discountPrice: number | undefined;
  garageRooms: number | undefined;
  hasCellar: boolean | undefined;
  hasDiscount: boolean | undefined;
  id: number | undefined;
  immoId: number | undefined;
  immoName: string | undefined;
  isActive: boolean | undefined;
  livingSpaceSize: number | undefined;
  locationId: number | undefined;
  mainTitle: string | undefined;
  objectDetailsId: number | undefined;
  objectTypeId: number | undefined;
  objectTypeName: string | undefined;
  plotSize: number | undefined;
  priceId: number | undefined;
  priceOnContact: boolean | undefined;
  rooms: number | undefined;
  sellPrice: number | undefined;
  state: string | undefined;
  street: string | undefined;
  subTitle: string | undefined;


  constructor(
    bathrooms: number,
    bedrooms: number,
    city: string,
    country: string,
    description: string,
    discountPrice: number,
    garageRooms: number,
    hasCellar: boolean,
    hasDiscount: boolean,
    id: number,
    immoId: number,
    immoName: string,
    isActive: boolean,
    livingSpaceSize: number,
    locationId: number,
    mainTitle: string,
    objectDetailsId: number,
    objectTypeId: number,
    objectTypeName: string,
    plotSize: number,
    priceId: number,
    priceOnContact: boolean,
    rooms: number,
    sellPrice: number,
    state: string,
    street: string,
    subTitle: string,
  ) { }

}
