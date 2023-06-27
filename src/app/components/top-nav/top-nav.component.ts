import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DialogEnum } from '../../pages/offers-overview/offers-overview.component';
import { DetailsViewService } from '../details-view/details-view.service';

@Component({
  selector: 'lib-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TopNavComponent {
  public navigationEntries?: NavigationEntry[];
  isAdmin: boolean = false;
  userStatus: string = 'Admin';
  createClickedStatus = false;
  @Output()
  createClicked = new EventEmitter<boolean>();

  constructor(private router: Router, private detailsViewService: DetailsViewService) {
    this.navigationEntries = [];

    let homeEntry: NavigationEntry = {
      title: "Home",
      navigationLink: "/home"
    };

    let offersEntry: NavigationEntry = {
      title: "Offers",
      navigationLink: "/offers-overview"
    }
    let contactsEntry: NavigationEntry = {
      title: "Contact",
      navigationLink: "/contacts"
    };

    this.navigationEntries.push(homeEntry);
    this.navigationEntries.push(offersEntry)
    this.navigationEntries.push(contactsEntry)



  }

  isOffersComponent() {
    return this.router.url.includes('/offers-overview');
  }

  changeUserStatus() {
    this.isAdmin = !this.isAdmin;
    if (this.isAdmin == true) {
      this.userStatus = 'User';
    } else {
      this.userStatus = 'Admin';
    }
  }

  title = 'ImmoMarket';

  createOffer() {
    this.createClickedStatus = !this.createClickedStatus;
    this.createClicked.emit(this.createClickedStatus);
    this.detailsViewService.openDialog(0, DialogEnum.Create);
  }
}

interface NavigationEntry {
  title: string;
  navigationLink: String;
}
