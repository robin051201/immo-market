import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiserviceService } from '../../Services/apiservice.service';

@Component({
  selector: 'lib-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailsViewComponent implements OnInit {
  @Input() id?: number;
  constructor(private offer: ApiserviceService) {
  }
  ngOnInit() {
    if (!this.id)
      return

    this.offer.getProperty(this.id).subscribe((item) => {
      console.log(item)
    });
  }
} 
