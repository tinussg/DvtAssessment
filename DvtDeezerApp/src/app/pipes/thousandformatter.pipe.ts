import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandformatter'
})
export class ThousandformatterPipe implements PipeTransform {

  transform(fans: number): string {
    const si = [
      { value: 1, symbol: '' },
      { value: 1E3, symbol: 'k' },
      { value: 1E6, symbol: 'M' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (fans >= si[i].value) {
        break;
      }
    }

    return (fans / si[i].value).toFixed(1).replace(rx, '$1') + si[i].symbol;
  }

}
