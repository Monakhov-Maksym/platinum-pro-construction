import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { MetalRoofingComponent } from '../metal-roofing/metal-roofing.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'metal-roofing', component: MetalRoofingComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
