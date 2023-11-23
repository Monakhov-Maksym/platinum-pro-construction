import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.block.html',
  styleUrls: ['./title.block.scss'],
})
export class TitleBlock {
  @Input() title!: string;

  @Input() image: string = 'https://via.placeholder.com/1000';
}
