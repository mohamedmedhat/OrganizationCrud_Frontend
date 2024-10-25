import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covertTimeStampToString',
  standalone: true
})
export class CovertTimeStampToStringPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    return new Date(value).toLocaleDateString();
  }

}
