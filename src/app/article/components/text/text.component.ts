import { Component, Input } from '@angular/core';
import { ArdonUniformType } from '../../models/article.interface';

@Component({
  selector: 'ardon-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input() content: ArdonUniformType<string[]> = [];
}
