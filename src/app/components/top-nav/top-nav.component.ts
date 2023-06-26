import { HttpClient } from '@angular/common/http';
import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private router: Router) {
    this.navigationEntries = [];

    let homeEntry: NavigationEntry = {
      title: "Home",
      navigationLink: "/home"
    };
    this.navigationEntries.push(homeEntry);

    let contactsEntry: NavigationEntry = {
      title: "Results",
      navigationLink: "/results"
    };
    let offersEntry: NavigationEntry = {
      title: "Offers",
      navigationLink: "/offers-overview"
    }
    this.navigationEntries.push(contactsEntry)
    this.navigationEntries.push(offersEntry)

    console.log(this.navigationEntries)
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
  }
}

interface NavigationEntry {
  title: string;
  navigationLink: String;
}
