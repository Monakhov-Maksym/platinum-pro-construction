import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MetalRoofingComponent } from './metal-roofing/metal-roofing.component';
import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PaintingComponent } from './painting/painting.component';
import { WindowsComponent } from './windows/windows.component';
import { LandscapingComponent } from './landscaping/landscaping.component';
import { FlooringComponent } from './flooring/flooring.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [AppComponent, MetalRoofingComponent, ServicesComponent, PaintingComponent, WindowsComponent, LandscapingComponent, FlooringComponent, ContactComponent, AboutUsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
