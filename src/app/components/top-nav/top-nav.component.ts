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
    this.navigationEntries.push(homeEntry)

    let aboutMeEntry: NavigationEntry = {
      title: "About Me",
      navigationLink: "/about-me"
    };
    this.navigationEntries.push(aboutMeEntry)

    let pagesEntry: NavigationEntry = {
      title: "Pages",
      navigationLink: "/pages"
    };
    this.navigationEntries.push(pagesEntry)

    let contactsEntry: NavigationEntry = {
      title: "Contacts",
      navigationLink: "/contacts"
    };
    this.navigationEntries.push(contactsEntry)

    console.log(this.navigationEntries)
  }

  title = 'Omilia';
}

interface NavigationEntry {
  title: string;
  navigationLink: String;
}
