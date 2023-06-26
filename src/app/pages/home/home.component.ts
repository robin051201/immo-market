import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchTerm?: string;
  title = 'Home'; 

  constructor(private router: Router) { 
  }

  onSearch() {
    this.router.navigate(['/offers-overview', { queryParams: this.searchTerm }]);

    this.router.navigate(
      ['/offers-overview'],
      {
        queryParams: { searchTerm: this.searchTerm },
        queryParamsHandling: 'merge'
      }
    );
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
