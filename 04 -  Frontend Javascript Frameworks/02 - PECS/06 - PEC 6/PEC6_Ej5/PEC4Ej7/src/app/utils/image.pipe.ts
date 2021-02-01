import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {
  defaultImage: string = '/assets/images/wineDefault.jpg';
  transform(value: any) {
    if (value === '' || undefined || null) {
      return this.defaultImage;
    }
    return value;
  }
}
