import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CTAComponent {
  @Input() title: string = '';
}
