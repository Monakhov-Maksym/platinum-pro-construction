import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() items: { title: string; description: string }[] = [
    { title: 'test', description: 'test' },
    { title: 'test', description: 'test' },
  ];
}
