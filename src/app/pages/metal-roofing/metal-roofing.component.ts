import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-metal-roofing',
  templateUrl: './metal-roofing.component.html',
  styleUrls: ['./metal-roofing.component.scss']
})
export class MetalRoofingComponent implements OnInit{
  images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
    'image13.jpg',
    'image14.jpg',
    'image15.jpg',
    'image16.jpg',
    'image17.jpg',
    'image18.jpg'
  ];

  currentIndex = 0;
  visibleImages: string[] = [];

  updateVisibleImages() {
    this.visibleImages = this.images.slice(this.currentIndex, this.currentIndex + 6);
  }

  prevImages() {
    this.currentIndex = (this.currentIndex - 3 + this.images.length) % this.images.length;
    this.updateVisibleImages();
  }

  nextImages() {
    this.currentIndex = (this.currentIndex + 3) % this.images.length;
    this.updateVisibleImages();
  }

  ngOnInit() {
    this.updateVisibleImages();
  }
}
