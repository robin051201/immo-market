import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiserviceService } from "../../Services/apiservice.service";

@Component({
  selector: 'app-offers-overview',
  templateUrl: './offers-overview.component.html',
  styleUrls: ['./offers-overview.component.scss']
})
export class OffersOverviewComponent implements OnInit {
  searchText: string = "";
  constructor(private offer: ApiserviceService, private route: ActivatedRoute) {
    this.offer.getData().subscribe((offers) => {
      this.propertiesNew = offers;
      console.log(this.propertiesNew);
    });

    this.route.queryParams.subscribe(params => {
      const searchText = params.searchTerm;
      if (searchText) {
        this.searchText = searchText;
      } else {
        this.offer.getData().subscribe((offers) => {
          this.propertiesNew = offers;
        });
      }
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

  ngOnInit(): void {
    this.loadProperties();
  }

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
    bathrooms: number ,
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
  ) {

    this.bathrooms = bathrooms;
    this.city = city;
    this.country = country;
    this.description = description;
    this.discountPrice = discountPrice;
    this.garageRooms = garageRooms;
    this.hasCellar = hasCellar;
    this.hasDiscount = hasDiscount;
    this.id = id;
    this.bedrooms = bedrooms;
    this.immoId = immoId;
    this.immoName = immoName;
    this.isActive = isActive;
    this.livingSpaceSize = livingSpaceSize;
    this.locationId = locationId;
    this.mainTitle = mainTitle;
    this.objectDetailsId = objectDetailsId;
    this.objectTypeId = objectTypeId;
    this.objectTypeName = objectTypeName;
    this.plotSize = plotSize;
    this.priceId = priceId;
    this.priceOnContact = priceOnContact;
    this.rooms = rooms; 
    this.sellPrice = sellPrice;
    this.state = state;
    this.sellPrice = sellPrice;
    this.street = street;
    this.subTitle = subTitle;
  }

}
