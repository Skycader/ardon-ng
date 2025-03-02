import { Component, Input } from '@angular/core';
import { ArdonContentType } from '../../models/article.interface';

export interface TextBlockInterface {
  paragraphs: string[];
}
@Component({
  selector: 'ardon-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input() content: ArdonContentType<'text'> = {
    paragraphs: [],
  };
}
