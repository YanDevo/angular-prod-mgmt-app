import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {RatingModule} from 'ngx-bootstrap/rating'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { DashesToSpacesPipe } from 'src/app/shared/dashes-to-spaces.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    DashesToSpacesPipe,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
