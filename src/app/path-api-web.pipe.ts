import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'pathApiWeb'
})
export class PathApiWebPipe implements PipeTransform {
  movieUrl = 'https://image.tmdb.org/t/p/w300/';
  transform(value: string): any {
    return this.movieUrl + value;
  }

} 
