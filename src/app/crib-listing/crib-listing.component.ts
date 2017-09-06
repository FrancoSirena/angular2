import { Component, OnInit } from '@angular/core';
import { Crib } from './../crib';

import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  cribs: Array<Crib>;
  error: string;
  sortField = 'price';
  sortDirection = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bedrooms',
    'bathrooms',
    'price',
    'type'
  ];

  constructor( private cribsSerivce: CribsService, public utilService: UtilService) { }

  ngOnInit() {
    this.cribsSerivce
      .getAllCribs()
      .subscribe(data => this.cribs = data,
                error => this.error = error);
    this.cribsSerivce.newCribSubject.subscribe(data => this.cribs = [data, ...this.cribs]);
  }

}
