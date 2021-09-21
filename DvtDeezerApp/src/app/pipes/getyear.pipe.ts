import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class GetyearPipe implements PipeTransform {

  transform(date: string): string {
    return date ? new Date(date).getFullYear().toString() : 'N/A';
  }

}
