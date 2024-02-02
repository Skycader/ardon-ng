import { Component, Input } from '@angular/core';

@Component({
  selector: 'ardon-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input() content: string = '';
}
