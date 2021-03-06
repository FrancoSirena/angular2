import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MdButtonModule, MdFormFieldModule, MdIconModule, MdCardModule, MdListModule, MdInputModule, MdTabsModule, MdSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';

import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { OtherComponent } from './other/other.component';

import 'hammerjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full'
  },
  {
    path: 'listing',
    component: CribListingComponent
  },
  {
    path: 'other-component',
    component: OtherComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdFormFieldModule,
    MdInputModule,
    MdSelectModule,
    MdCardModule,
    MdListModule,
    MdTabsModule,
    MdIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CribsService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
