import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiserviceService } from "../../Services/apiservice.service";
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailsViewService } from '../../components/details-view/details-view.service';
import { TopnavService } from '../../Services/topnav-service.service'

export enum DialogEnum {
  Inspect = 1,
  Edit = 2,
  Create = 3
}

@Component({
  selector: 'app-offers-overview',
  templateUrl: './offers-overview.component.html',
  styleUrls: ['./offers-overview.component.scss']
})
export class OffersOverviewComponent implements OnInit, OnDestroy {
  public openDetails: boolean = false;
  public detailsId?: number;
  public isAdmin: boolean = false;
  dialogType?: DialogEnum;
  detailsTitle?: string;
  propId?: number;
  demoImage: string = "https://www.engelvoelkers.com/images/2738b482-b0d6-4e1f-b4de-0500a5f9e8df/sonnige-maisonette-wohnung-mit-tiefgaragenstellplatz-3-obergeschoss";

  //Subscriptions
  sub0: Subscription | undefined;
  sub1: Subscription | undefined;



  constructor(
    private offer: ApiserviceService,
    private route: ActivatedRoute,
    private detailsViewService: DetailsViewService,
    private topNavService: TopnavService,
  ) { }


  ngOnInit(): void {

    this.detailsViewService.onOpenDialog().subscribe(({ id, type, title }) => {
      this.propId = id;
      this.dialogType = type;
      this.showCreateDialog = true;
      this.detailsTitle = title;
    });

    this.sub1 = this.detailsViewService.onCloseDialog().subscribe(() => {
      this.showCreateDialog = false;
    });

    this.route.queryParams.subscribe((params) => {
      if (params.searchTerm) {
        this.offer.getDataBySearchterm(params.searchTerm).subscribe((offers) => {
          this.propertiesNew = offers;
          console.log(this.propertiesNew);
        });
      } else {
        this.loadData();
      }
    });

    this.topNavService.sharedData$.subscribe(userStatus => {
      this.isAdmin = userStatus;
    })
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
  }

  loadData(): void {
    this.offer.getData().subscribe((offers) => {
      this.propertiesNew = offers;
      console.log(this.propertiesNew);
    });
  }

  openProperty(id: number | undefined): void {
    if (!id) {
      return;
    }

    this.openDetails = !this.openDetails;
    this.detailsId = id; 
    this.detailsViewService.openDialog(id, DialogEnum.Inspect,"Inspect Property");
  }

  deletePropery(id:number): void {
    this.offer.deleteProperty(id);
  }

  close(): void {
    this.openDetails = false;
  }

  showCreateDialog: boolean = false;

  changeCreateDialogStatus(): void {
    this.showCreateDialog = !this.showCreateDialog;
    console.log(this.showCreateDialog);
  }

  properties: any = [];
  propertiesNew: Array<Property> = [];
}

export class Property {
  bathrooms?: number;
  bedrooms?: number;
  city?: string;
  country?: string;
  description?: string;
  discountPrice?: number;
  garageRooms?: number;
  hasCellar?: boolean;
  hasDiscount?: boolean;
  id?: number;
  immoId?: number;
  immoName?: string;
  isActive?: boolean;
  livingSpaceSize?: number;
  locationId?: number;
  mainTitle?: string;
  objectDetailsId?: number;
  objectTypeId?: number;
  objectTypeName?: string;
  plotSize?: number;
  priceId?: number;
  priceOnContact?: boolean;
  rooms?: number;
  sellPrice?: number;
  state?: string;
  street?: string;
  subTitle?: string;

  constructor(
  ) { }
}
