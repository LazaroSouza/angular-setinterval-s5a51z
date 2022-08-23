import { Component, OnInit, VERSION } from '@angular/core';
import { Image } from './image.model';
import { ImagesService } from './images.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  images: Image[] = [];
  actualImage: string;
  changeBackgroundCounter = 0;
  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.images = this.imagesService.getImages();
    this.actualImage = this.images[0].image;
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.images[this.changeBackgroundCounter].image;
    }, 10000);
  }
}
