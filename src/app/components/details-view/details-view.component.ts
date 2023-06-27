import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogEnum } from '../../pages/offers-overview/offers-overview.component';
import { ApiserviceService } from '../../Services/apiservice.service';
import { DetailsViewService } from './details-view.service';


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

  createOfferGroup = new FormGroup({
    mainTitle: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    country: new FormControl(''),
    sellPrice: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    plotSize: new FormControl(''),
    livingSpaceSize: new FormControl(''),
    rooms: new FormControl(''),
    bathrooms: new FormControl(''),
    bedrooms: new FormControl(''),
    hasCellar: new FormControl(''),
    garageRooms: new FormControl(''),
    objectTypeName: new FormControl(''),
    isActive: new FormControl(''), 
    discountPrice: new FormControl(''),
    hasDiscount: new FormControl(''),
    priceOnContact: new FormControl(''),
  });

  countries: string[] = [];
  constructor(
    private offer: ApiserviceService,
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
      this.createOfferGroup.controls['description'].setValue(item.description);
      this.createOfferGroup.controls['country'].setValue(item.country);
      this.createOfferGroup.controls['sellPrice'].setValue(item.sellPrice);
      this.createOfferGroup.controls['state'].setValue(item.state);
      this.createOfferGroup.controls['city'].setValue(item.city);
      this.createOfferGroup.controls['street'].setValue(item.street); 
      this.createOfferGroup.controls['plotSize'].setValue(item.city);
      this.createOfferGroup.controls['livingSpaceSize'].setValue(item.street);
      this.createOfferGroup.controls['rooms'].setValue(item.street); 
      this.createOfferGroup.controls['bathrooms'].setValue(item.street);
      this.createOfferGroup.controls['bedrooms'].setValue(item.street);
      this.createOfferGroup.controls['hasCellar'].setValue(item.street);
      this.createOfferGroup.controls['garageRooms'].setValue(item.street);
      this.createOfferGroup.controls['objectTypeName'].setValue(item.street);  
      this.createOfferGroup.controls['isActive'].setValue(item.street);
      this.createOfferGroup.controls['priceOnContact'].setValue(item.street);
      this.createOfferGroup.controls['hasDiscount'].setValue(item.street);
      this.createOfferGroup.controls['sellPrice'].setValue(item.street);
      this.createOfferGroup.controls['discountPrice'].setValue(item.street); 
       
      // add remaining fields similarly

      if (this.dialogType === DialogEnum.Inspect) {
        this.createOfferGroup.disable();
      }
    });
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
