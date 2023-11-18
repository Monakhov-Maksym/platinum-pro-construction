import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MetalRoofingComponent } from './metal-roofing/metal-roofing.component';

@NgModule({
  declarations: [
    AppComponent,
    MetalRoofingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
