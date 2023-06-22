import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TopNavComponent {
  public navigationEntries?: NavigationEntry[];

  constructor() {
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
}

interface NavigationEntry {
  title: string;
  navigationLink: String;
}
