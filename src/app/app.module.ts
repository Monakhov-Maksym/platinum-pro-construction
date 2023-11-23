import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderBlock } from './blocks/layout/header/header.block';

import { TitleBlock } from './blocks/title/title.block';

import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';

import { PaintingComponent } from './painting/painting.component';
import { WindowsComponent } from './windows/windows.component';
import { LandscapingComponent } from './landscaping/landscaping.component';
import { FlooringComponent } from './flooring/flooring.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MovingComponent } from './moving/moving.component';

import { ServicesComponent } from './services/services.component';
import { MetalRoofingComponent } from './metal-roofing/metal-roofing.component';
import { DescriptionComponent } from './blocks/description/description.component';

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
    ContactComponent,
    AboutUsComponent,
    MovingComponent,
    DescriptionComponent,
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
