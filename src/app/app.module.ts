import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderBlock } from './blocks/layout/header/header.block';

import { TitleBlock } from './blocks/title/title.block';

import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';

import { PaintingComponent } from './pages/painting/painting.component';
import { WindowsComponent } from './pages/windows/windows.component';
import { LandscapingComponent } from './landscaping/landscaping.component';
import { FlooringComponent } from './flooring/flooring.component';
import { MovingComponent } from './pages/moving/moving.component';

import { ServicesComponent } from './services/services.component';
import { MetalRoofingComponent } from './pages/metal-roofing/metal-roofing.component';
import { DescriptionComponent } from './blocks/description/description.component';
import { ListComponent } from './blocks/list/list.component';
import { CarouselComponent } from './blocks/carousel/carousel.component';
import { CTAComponent } from './blocks/cta/cta.component';

const routes: Routes = [
  { path: 'about', component: AboutPage },
  { path: 'contact', component: ContactPage },

  { path: 'services', component: ServicesComponent },
  { path: 'metal-roofing', component: MetalRoofingComponent },
];

@NgModule({
  declarations: [
    AppComponent,

    HeaderBlock,

    TitleBlock,

    AboutPage,
    ContactPage,

    MetalRoofingComponent,
    ServicesComponent,
    PaintingComponent,
    WindowsComponent,
    LandscapingComponent,
    FlooringComponent,
    MovingComponent,
    DescriptionComponent,
    ListComponent,
    CarouselComponent,
    CTAComponent,
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
