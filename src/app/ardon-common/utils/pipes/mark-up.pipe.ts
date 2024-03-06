import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markUp',
})
export class MarkUpPipe implements PipeTransform {
  private bold = /\*\*(.*?)\*\*/g;
  private italic = /\_\_(.*?)\_\_/g;
  private link = /\[(.*?)\]\((.*?)\)/g;
  transform(value: string): string {
    return value
      .replace(this.bold, '<b>$1</b>')
      .replace(this.italic, '<i>$1</i>')
      .replace(this.link, '<a target="_blank" href="$2">$1</a>');
  }
}
