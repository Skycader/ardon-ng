import { Pipe, PipeTransform } from '@angular/core';
import { ArdonConfigInterface } from '../../models/ardonConfig.interface';
type ValueOf<T> = T[keyof T];
@Pipe({
  name: 'get',
})
export class GetPipe implements PipeTransform {
  transform(
    value: ArdonConfigInterface,
    key: keyof ArdonConfigInterface
  ): ValueOf<ArdonConfigInterface> {
    if (value) {
      return value[key];
    } else {
      return '';
    }
  }
}
