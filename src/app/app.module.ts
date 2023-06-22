import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule } from '@angular/forms';
import { OffersOverviewComponent } from './pages/offers-overview/offers-overview.component';
import { FilterPipe } from './FilterPipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    ContactComponent,
    OffersOverviewComponent,
    FilterPipe,
  ], 
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
