import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Layout/header/header.component';
import { HomePageComponent } from './Pages/Home_Pages/home-page/home-page.component';

import { ContactPageComponent } from './Pages/Contact_Pages/contact-page/contact-page.component';
import { ServicesPageComponent } from './Pages/Services_Pages/services-page/services-page.component';
import { HomeIntroComponent } from './Pages/Home_Pages/home-intro/home-intro.component';
import { ImageHomeComponent } from './Pages/Home_Pages/image-home/image-home.component';
import { FirstSectionComponent } from './Pages/Home_Pages/first-section/first-section.component';
import { OffersComponent } from './Pages/Home_Pages/offers/offers.component';
import { OfferComponent } from './Pages/Home_Pages/offer/offer.component';
import { OurSerHomeComponent } from './Pages/Home_Pages/our-ser-home/our-ser-home.component';
import { TeamsComponent } from './Pages/Home_Pages/teams/teams.component';
import { PersonComponent } from './Pages/Home_Pages/person/person.component';
import { LastSectionComponent } from './Pages/Home_Pages/last-section/last-section.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AboutIntroComponent } from './Pages/About_Pages/about-intro/about-intro.component';
import { AboutPageComponent } from './Pages/About_Pages/about-page/about-page.component';
import { PhotosAboutComponent } from './Pages/About_Pages/photos-about/photos-about.component';
import { ServiceIntroComponent } from './Pages/Services_Pages/service-intro/service-intro.component';
import { FormContactComponent } from './Pages/Contact_Pages/form-contact/form-contact.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ContactPageComponent,
    ServicesPageComponent,
    HomeIntroComponent,
    ImageHomeComponent,
    FirstSectionComponent,
    OffersComponent,
    OfferComponent,
    OurSerHomeComponent,
    TeamsComponent,
    PersonComponent,
    LastSectionComponent,
    FooterComponent,
    AboutIntroComponent,
    AboutPageComponent,
    PhotosAboutComponent,
    ServiceIntroComponent,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
