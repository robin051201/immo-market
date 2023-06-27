import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogEnum } from '../../pages/offers-overview/offers-overview.component';
import { ApiserviceService } from '../../Services/apiservice.service';
import { DetailsViewService } from './details-view.service';
import { TopnavService } from "../../Services/topnav-service.service";


@Component({
  selector: 'lib-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailsViewComponent implements OnInit {
  @Input() id?: number;
  @Input() title?: string;
  @Input() dialogType?: DialogEnum;


  createDialog = document.getElementById("createDialog");
  files: File[] = [];
  types: any = DialogEnum;

  isAdmin: boolean = false;

  createOfferGroup = new FormGroup({
    mainTitle: new FormControl('', [Validators.required]),
    subTitle: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    country: new FormControl(''),
    sellPrice: new FormControl(0),
    state: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    plotSize: new FormControl(0),
    livingSpaceSize: new FormControl(0),
    rooms: new FormControl(0),
    bathrooms: new FormControl(0),
    bedrooms: new FormControl(0),
    hasCellar: new FormControl(false),
    garageRooms: new FormControl(0),
    objectTypeName: new FormControl(''),
    isActive: new FormControl(false),
    discountPrice: new FormControl(0),
    hasDiscount: new FormControl(false),
    priceOnContact: new FormControl(false),
  });

  countries: string[] = [];
  constructor(
    private offer: ApiserviceService,
    private topNavService: TopnavService,
    private http: HttpClient,
    private detailsViewService: DetailsViewService,
    private cd: ChangeDetectorRef) {
    this.countries.push('Greece', 'Germany', 'Austria', 'Switzerland');
  }
  ngOnInit() {
    if (!this.id) return;

    this.offer.getProperty(this.id).subscribe((item: any) => {
      console.log(item);

      this.createOfferGroup.controls['mainTitle'].setValue(item.mainTitle);
      this.createOfferGroup.controls['subTitle'].setValue(item.subTitle);
      this.createOfferGroup.controls['description'].setValue(item.description);
      this.createOfferGroup.controls['country'].setValue(item.country);
      this.createOfferGroup.controls['sellPrice'].setValue(item.sellPrice);
      this.createOfferGroup.controls['state'].setValue(item.state);
      this.createOfferGroup.controls['city'].setValue(item.city);
      this.createOfferGroup.controls['street'].setValue(item.street);
      this.createOfferGroup.controls['plotSize'].setValue(item.plotSize);
      this.createOfferGroup.controls['livingSpaceSize'].setValue(item.livingSpaceSize);
      this.createOfferGroup.controls['rooms'].setValue(item.rooms);
      this.createOfferGroup.controls['bathrooms'].setValue(item.bathrooms);
      this.createOfferGroup.controls['bedrooms'].setValue(item.bedrooms);
      this.createOfferGroup.controls['hasCellar'].setValue(item.hasCellar);
      this.createOfferGroup.controls['garageRooms'].setValue(item.garageRooms);
      this.createOfferGroup.controls['objectTypeName'].setValue(item.objectTypeName);
      this.createOfferGroup.controls['isActive'].setValue(item.isActive);
      this.createOfferGroup.controls['priceOnContact'].setValue(item.priceOnContact);
      this.createOfferGroup.controls['hasDiscount'].setValue(item.hasDiscount);
      this.createOfferGroup.controls['sellPrice'].setValue(item.sellPrice);
      this.createOfferGroup.controls['discountPrice'].setValue(item.discountPrice);

      // add remaining fields similarly
      if (this.dialogType === DialogEnum.Inspect) {
        this.createOfferGroup.disable();
      }
    });
    this.topNavService.sharedData$.subscribe(userStatus => {
      this.isAdmin = userStatus;
    });
  }


  onSubmit() {
    if (this.createOfferGroup.valid) {
      let obj = {
        "id": 0,
        "immoName": "",
        "immoId": 0,
        "mainTitle": this.createOfferGroup.get('mainTitle')?.value,
        "subTitle": this.createOfferGroup.get('subTitle')?.value,
        "description": this.createOfferGroup.get('description')?.value,
        "priceId": 0,
        "objectTypeId": 0,
        "locationId": 0,
        "objectDetailsId": 0,
        "country": this.createOfferGroup.get('country')?.value,
        "state": this.createOfferGroup.get('state')?.value,
        "city": this.createOfferGroup.get('city')?.value,
        "street": this.createOfferGroup.get('street')?.value,
        "plotSize": this.createOfferGroup.get('plotSize')?.value,
        "livingSpaceSize": this.createOfferGroup.get('livingSpaceSize')?.value,
        "rooms": this.createOfferGroup.get('rooms')?.value,
        "bathrooms": this.createOfferGroup.get('bathrooms')?.value,
        "bedrooms": this.createOfferGroup.get('bedrooms')?.value,
        "hasCellar": this.createOfferGroup.get('hasCellar')?.value,
        "garageRooms": this.createOfferGroup.get('garageRooms')?.value,
        "objectTypeName": this.createOfferGroup.get('objectTypeName')?.value,
        "isActive": this.createOfferGroup.get('isActive')?.value,
        "sellPrice": this.createOfferGroup.get('sellPrice')?.value,
        "discountPrice": this.createOfferGroup.get('discountPrice')?.value,
        "hasDiscount": this.createOfferGroup.get('hasDiscount')?.value,
        "priceOnContact": this.createOfferGroup.get('priceOnContact')?.value,
        "immoDetailsId": 0
      }

      this.offer.createProperty(obj).subscribe((response) => {
        console.log(response);
        this.detailsViewService.closeDialog();
      }, (error) => {
        console.error(error);
      });
    } else {
      console.log('Form is not valid');
    }
  }

  closeDialog() {
    this.detailsViewService.closeDialog();
  }

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) {
      formData.append("file[]", this.files[i]);
    }

    this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
