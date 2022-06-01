import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './Pages/About_Pages/about-page/about-page.component';

import { ContactPageComponent } from './Pages/Contact_Pages/contact-page/contact-page.component';
import { HomePageComponent } from './Pages/Home_Pages/home-page/home-page.component';
import { ServicesPageComponent } from './Pages/Services_Pages/services-page/services-page.component';

const routes: Routes = [
{path:'' ,  component:HomePageComponent ,pathMatch:'full'},
{path:'about' , component:AboutPageComponent},
{path:'Services' , component:ServicesPageComponent},
{path:'contact' , component:ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
