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
    this.navigationEntries.push(homeEntry);

    let contactsEntry: NavigationEntry = {
      title: "Results",
      navigationLink: "/results"
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
