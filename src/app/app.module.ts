import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NgIf } from "@angular/common";
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { SearchpartComponent } from './searchpart/searchpart.component';
import { CategoriesComponent } from './categories/categories.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SliderComponent,
    FooterComponent,
    SearchpartComponent,
    CategoriesComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
