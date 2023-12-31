import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderBlock } from './blocks/layout/header/header.block';
import { FooterComponent } from './blocks/layout/footer/footer.component';
import { CTAComponent } from './blocks/layout/cta/cta.component';

import { TitleBlock } from './blocks/title/title.block';

import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';

import { PaintingComponent } from './pages/painting/painting.component';
import { WindowsComponent } from './pages/windows/windows.component';
import { LandscapingComponent } from './pages/landscaping/landscaping.component';
import { FlooringComponent } from './pages/flooring/flooring.component';
import { MovingComponent } from './pages/moving/moving.component';

import { ServicesComponent } from './pages/services/services.component';
import { MetalRoofingComponent } from './pages/metal-roofing/metal-roofing.component';
import { DescriptionComponent } from './blocks/description/description.component';
import { ListComponent } from './blocks/list/list.component';
import { CarouselComponent } from './blocks/carousel/carousel.component';
import { FeaturesComponent } from './blocks/features/features.component';

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
    FooterComponent,
    CTAComponent,

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
    FeaturesComponent,
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
