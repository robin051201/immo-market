import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OffersOverviewComponent} from "./components/offers-overview/offers-overview.component";
//import { AboutMeComponent } from './about-me/about-me.component';
//import { PagesComponent } from './pages/pages.component';
//import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'offers-overview', component: OffersOverviewComponent},
  { path: '**', redirectTo: '/home' }  // If path doesn't match any of the above, redirect to home.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
