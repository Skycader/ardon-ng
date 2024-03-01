import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markUp',
})
export class MarkUpPipe implements PipeTransform {
  private bold = /\*\*(.*?)\*\*/g;
  private italic = /\_\_(.*?)\_\_/g;
  transform(value: string): string {
    console.log('transform', value);
    return value
      .replace(this.bold, '<b>$1</b>')
      .replace(this.italic, '<i>$1</i>');
  }
}
