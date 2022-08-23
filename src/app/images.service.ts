import { Image } from './image.model';

export class ImagesService {
  private images: Image[] = [
    {
      imageDesciption: 'teste1',
      image:
        'https://pixabay.com/get/gd267e51d141105ec9373475f4b7bc1ec47686a767ca4710e2c90c78330fb7467bbec5e3076bdfea4354838fc69983547519e18d41b14d4edc94082e7a67cc5b123c60671988139af2de978102be7bfca_1920.jpg?attachment=',
    },
    {
      imageDesciption: 'teste2',
      image:
        'https://pixabay.com/get/g5f19f4ebb41e55c1caffea6d33113b63eb5d7807b69c17f3cd2a1a71a70873030e44b383f456544732796cceb7ee3ecfebbf7ed54f4295856c7fd482678b36390b01fb527862f4cf0fd3237ad8981e1d_1920.jpg?attachment=',
    },
    {
      imageDesciption: 'teste3',
      image:
        'https://pixabay.com/get/gb8ccf8d78d4b7d1d549802b8cd4c6d97ac978b3108f5eed92b474bda904924197ea183376be16300e569ef05609c0b2a9eac162fa25ef1bc0e09d4ba2dc4fcb8dcea8b825a4333728b09c5b0b2792ab1_1280.png?attachment=',
    },
  ];

  getImages() {
    return this.images.slice();
  }
}
